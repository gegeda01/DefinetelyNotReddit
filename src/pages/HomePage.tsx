import React, { useEffect, useState } from 'react';
import { Editor } from '../components';
import { EditorContent } from '../components/Editor';
import { getComments, getPosts, REDDIT_BASE_URL } from '../utils/reddit';

const mapChildrenToPost = (children: any[]) => {
  return children
    .map((child) => child.data)
    .map((child) => ({
      title: child.title,
      subreddit: child.subreddit_name_prefixed,
      url: `${REDDIT_BASE_URL}/${child.subreddit_name_prefixed}/comments/${child.id}`,
    }));
};

const HomePage: React.FC = () => {
  const [content, setContent] = useState<EditorContent>({});

  const handleLinkClick = (url: string) => {
    getComments(url).then((res) => setContent(res));
  };

  useEffect(() => {
    getPosts().then((res) => {
      const data = res.data.data;
      setContent({
        after: data.after,
        posts: mapChildrenToPost(data.children),
      });
    });
  }, []);

  return (
    <>
      <Editor value={content} onLinkClick={handleLinkClick} />
    </>
  );
};

export default HomePage;
