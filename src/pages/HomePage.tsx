import React, { useEffect, useState } from 'react';
import { Editor } from '../components';
import { EditorContent } from '../components/Editor';
import { Child } from '../types';
import {
  getApi,
  getPosts,
  GET_POSTS_ENDPOINT,
  REDDIT_BASE_URL,
} from '../utils/reddit';

const getFullName = (child: Child) => `${child.kind}_${child.data.id}`;

const mapChildrenToPost = (children: any[]) => {
  return children
    .map((child) => child.data)
    .map((child) => ({
      title: child.title,
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

const HomePage: React.FC = () => {
  const [content, setContent] = useState<EditorContent>({});

  const handleLinkClick = (url: string) => {
    if (url.includes('comments')) {
      getApi(url).then((res) => setContent(res));
    } else {
      fetchPosts(url.split('after=')[1]);
    }
  };

  const fetchPosts = (after?: string) => {
    getPosts(after).then((res) => {
      setContent(postsToDisplayData(res));
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Editor value={content} onLinkClick={handleLinkClick} />
    </>
  );
};

export default HomePage;
