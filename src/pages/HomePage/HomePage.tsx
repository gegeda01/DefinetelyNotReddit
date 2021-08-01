import React, { useEffect, useState } from 'react';
import { Editor } from '../../components';
import { EditorContent } from '../../components/Editor/Editor';
import Loader from '../../components/Loader';
import Toolbox from '../../components/Toolbox/Toolbox';
import { Child } from '../../types';
import {
  getApi,
  getPosts,
  GET_POSTS_ENDPOINT,
  REDDIT_BASE_URL
} from '../../utils/reddit';
import styles from './HomePage.module.css';

const cleanText = (text: string): string => {
  if (!text) return text;
  return text.replace(/[\\\n]+/g, ' ').replace('"', '"');
};

const getFullName = (child: Child) => `${child.kind}_${child.data.id}`;

const mapChildrenToPost = (children: any[]) => {
  return children
    .map((child) => child.data)
    .map((child) => ({
      title: child.title,
      author: child.author,
      subreddit: child.subreddit_name_prefixed,
      url: `${REDDIT_BASE_URL}/${child.subreddit_name_prefixed}/comments/${child.id}`,
    }));
};

const postsToDisplayData = (posts: any) => {
  const data = posts.data.data;
  const links = {
    home: GET_POSTS_ENDPOINT,
    next: GET_POSTS_ENDPOINT + '?after=' + data.after,
    previous: GET_POSTS_ENDPOINT + '?before=' + getFullName(data.children[0]),
  };

  return {
    header: links,
    posts: mapChildrenToPost(data.children),
    footer: links,
  };
};

const mapChildrenToComment = (children: any[]) => {
  return children
    .map((child) => child.data)
    .map((child) => {
      const comment: any = {
        author: child.author,
        comment: cleanText(child.body),
      };

      if (child.replies) {
        comment.replies = mapChildrenToComment(child.replies.data.children);
      }

      return comment;
    });
};

const commentsToDisplayData = (response: any) => {
  const post = response.data[0].data.children[0].data;
  const comments = response.data[1].data;

  const links = {
    home: GET_POSTS_ENDPOINT,
    next: comments.after
      ? GET_POSTS_ENDPOINT + '?after=' + comments.after
      : null,
    previous: comments.before
      ? GET_POSTS_ENDPOINT + '?before=' + comments.before
      : null,
  };

  return {
    header: links,
    title: post.title,
    author: post.author,
    body: cleanText(post.selftext),
    comments: mapChildrenToComment(comments.children),
    footer: links,
  };
};

const code = {

}

const HomePage: React.FC = () => {
  const [content, setContent] = useState<EditorContent>({});
  const [loading, setLoading] = useState(false);

  const handleLinkClick = (url: string) => {
    if (url.includes('comments')) {
      fetchComments(url);
    } else {
      fetchPosts(url.split('after=')[1]);
    }
  };

  const fetchComments = (url: string) => {
    setLoading(true);
    getApi(url).then((res) => {
      if (res) {
        setLoading(false);
        setContent(commentsToDisplayData(res));
        setLoading(false);
      }
    });
  };

  const fetchPosts = (after?: string) => {
    setLoading(true);
    getPosts(after).then((res) => {
      setContent(postsToDisplayData(res));
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <div className={styles.container}>
        <Toolbox />
        <div>
          <Editor value={content} onLinkClick={handleLinkClick} />
          <Editor value={code}></Editor>
        </div>
      </div>
    </>
  );
};

export default HomePage;
