import React, { useEffect, useState } from 'react';
import { clearInterval } from 'timers';
import { Editor } from '..';

const dummyMessages = ['Hello', 'World'];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>(dummyMessages);

  useEffect(() => {
    const timeout = setInterval(() => {
      setMessages((prev) => [...prev, new Date().toISOString()]);
    }, 200);
    return () => clearInterval(timeout);
  }, []);

  return (
    <>
      <Editor
        value={messages.join('\n')}
        onLinkClick={() => null}
        language="yaml"
        width="50%"
        scrollWithContent
      ></Editor>
    </>
  );
};

export default Chat;
