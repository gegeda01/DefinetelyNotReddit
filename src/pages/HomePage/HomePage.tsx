import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from '../../components';
import { EditorContent } from '../../components/Editor/Editor';
import Loader from '../../components/Loader';
import Toolbox from '../../components/Toolbox/Toolbox';
import {
  createPostsUrl,
  getComments,
  getPosts,
  mapCommentsResponseToPage,
  mapPostResponseToPage,
} from '../../utils/reddit';
import styles from './HomePage.module.css';

interface HomePageParams {
  subreddit?: string;
}

const HomePage: React.FC = () => {
  const params = useParams<HomePageParams>();
  const [content, setContent] = useState<EditorContent>({});
  const [loading, setLoading] = useState(true);
  const [subreddit, setSubreddit] = useState<string | undefined>(
    params.subreddit
  );

  const handleLinkClick = (url: string) => {
    if (url.includes('comments')) {
      fetchComments(url);
    } else {
      fetchPosts(url);
    }
  };

  const fetchComments = (url: string) => {
    setLoading(true);
    getComments(url)
      .then((response) =>
        setContent(
          mapCommentsResponseToPage({
            response,
            subreddit,
          })
        )
      )
      .catch((e) =>
        setContent({
          error: e.message,
        })
      )
      .finally(() => setLoading(false));
  };

  const fetchPosts = (url: string) => {
    setLoading(true);
    getPosts(url)
      .then((response) =>
        setContent(
          mapPostResponseToPage({
            response,
            subreddit,
          })
        )
      )
      .catch((e) =>
        setContent({
          error: e.message,
        })
      )
      .finally(() => setLoading(false));
  };

  const fetchPostsCallback = useCallback(fetchPosts, [subreddit]);

  useEffect(() => {
    const url = createPostsUrl({
      subreddit,
    });
    fetchPostsCallback(url);
  }, [subreddit, fetchPostsCallback]);

  return (
    <>
      <Loader loading={loading} />
      <div className={styles.container}>
        <Toolbox />
        <Editor value={content} onLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default HomePage;
