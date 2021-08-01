import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Editor } from '../../components';
import { EditorContent } from '../../components/Editor/Editor';
import Loader from '../../components/Loader';
import Toolbox from '../../components/Toolbox/Toolbox';
import Topbar from '../../components/Topbar/Topbar';
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
    const path = url.replace(REDDIT_BASE_URL, '');
    history.push(path);
  };

  const fetchData = (url: string) => {
    if (url.includes('comments')) {
      fetchCommentsCallback(url);
    } else {
      fetchPostsCallback(url);
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

  const fetchCommentsCallback = useCallback(fetchComments, [subreddit]);
  const fetchPostsCallback = useCallback(fetchPosts, [subreddit]);

  const fetchDataCallback = useCallback(fetchData, [
    fetchCommentsCallback,
    fetchPostsCallback,
  ]);

  useEffect(() => {
    const url = `${REDDIT_BASE_URL}${location.pathname}${location.search}`;
    fetchDataCallback(url);
  }, [
    subreddit,
    fetchDataCallback,
    location.search,
    location.pathname,
    history,
  ]);

  let editorContent = content;
  if (loading) {
    editorContent = {
      loading: 'true',
    };
  }

  return (
    <>
      <Loader loading={loading} />
      <div className={styles.vertical}>
        <Topbar />
        <div className={styles.container}>
          <Toolbox />
          <Editor value={editorContent} onLinkClick={handleLinkClick} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
