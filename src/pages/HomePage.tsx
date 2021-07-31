import React from 'react';
import { Editor } from '../components';

const HomePage: React.FC = () => {
  console.log('test');

  const content = {
    title: 'Hello World',
    value: 'https://google.com',
  };

  return (
    <>
      <Editor value={content} />
    </>
  );
};

export default HomePage;
