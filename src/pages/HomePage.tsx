import React from 'react';
import { Editor } from '../components';
import { getPosts } from '../utils/reddit';

const HomePage: React.FC = () => {
  console.log('test');

  const content = {
    title: 'Hello World',
    value: 'https://google.com',
  };

  const handleLinkClick = (url: string) => {
    console.log('onLinkClick', url);
  };

  // getPosts().then((res) => console.log(res));

  return (
    <>
      <Editor value={content} onLinkClick={handleLinkClick} />
    </>
  );
};

export default HomePage;
