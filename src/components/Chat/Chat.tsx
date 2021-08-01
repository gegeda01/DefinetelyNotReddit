import { Input } from '@chakra-ui/react';
import randomItem from 'random-item';
import React, { useState } from 'react';
import { Editor } from '..';

const randomUsername = () => {
  return randomItem(dummyUsernames);
};

const createMessage = (value: string, username: string) => {
  return `<${username}>: ${value}`;
};

const dummyUsernames = ['shaohy', 'xinninggong', 'Sparye', 'gegada01'];

const dummyData = ['hi', 'sup', 'https://youtu.be/dQw4w9WgXcQ', 'lol'];

const dummyMessages = dummyData.map((value) =>
  createMessage(value, randomUsername())
);

const dummyResponse: {
  [x: string]: string;
} = {
  hi: 'yo',
  meow: '=^.^=',
};

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>(dummyMessages);
  const [value, setValue] = useState<string>('');

  const handleInput = (event: any) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.code !== 'Enter' || !value) return;
    setMessages((prev) => [...prev, createMessage(value, 'You')]);
    setValue('');

    if (value in dummyResponse) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          createMessage(dummyResponse[value], dummyUsernames[0]),
        ]);
      }, 777);
    }
  };

  return (
    <>
      <Editor
        value={messages.join('\n')}
        onLinkClick={() => null}
        language="yaml"
        width="50%"
        scrollWithContent
        minimap={false}
        readOnly
      ></Editor>
      <Input
        placeholder="Aa"
        variant="filled"
        position="absolute"
        w="20%"
        bottom="20px"
        right="5%"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        value={value}
        backgroundColor="#333"
      />
    </>
  );
};

export default Chat;
