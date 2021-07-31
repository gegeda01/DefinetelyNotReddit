import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Editor } from '../../components';
import { EditorContent } from '../../components/Editor/Editor';
import Loader from '../../components/Loader';
import Toolbox from '../../components/Toolbox/Toolbox';
import {
  getComments,
  getPosts,
  mapCommentsResponseToPage,
  mapPostResponseToPage,
  REDDIT_BASE_URL,
} from '../../utils/reddit';
import styles from './HomePage.module.css';

const getSubredditPath = (path: string) => {
  return path.startsWith('/r/')
    ? path.replace('/r/', '').split('/')[0]
    : undefined;
};

const HomePage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [content, setContent] = useState<EditorContent>({});
  const [loading, setLoading] = useState(false);
  const [subreddit, setSubreddit] = useState<string | undefined>(
    getSubredditPath(location.pathname)
  );

  const handleLinkClick = (url: string) => {
    fetchDataCallback(url);
  };

  const fetchData = (url: string) => {
    if (url.includes('comments')) {
      fetchCommentsCallback(url);
    } else {
      fetchPostsCallback(url);
    }

    const path = url.replace(REDDIT_BASE_URL, '');
    console.log('path', path);
    history.push(path);

    setSubreddit(getSubredditPath(location.pathname));
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

  const fetchCommentsCallback = useCallback(fetchComments, [subreddit]);
  const fetchPostsCallback = useCallback(fetchPosts, [subreddit]);

  const fetchDataCallback = useCallback(fetchData, [
    fetchCommentsCallback,
    fetchPostsCallback,
    history,
    location.pathname,
  ]);

  useEffect(() => {
    const url = `${REDDIT_BASE_URL}${location.pathname}${location.search}`;
    console.log('url', url);
    console.log('subreddit', subreddit);
    fetchDataCallback(url);
  }, [subreddit, fetchDataCallback, location.search, location.pathname]);

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
