import * as React from 'react';

import Layout from '../components/Layout';
import Input from '../components/Input';

import postMessage from '../services/postMessage';
import SubmitMessageButton from '../components/SubmitMessageButton';
import ColorSelect from '../components/ColorSelect';

export default function Home() {
  const [username, setUsername] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [color, setColor] = React.useState('white');

  const handleSubmit = () => {
    if (message) {
      void postMessage(message, { color, username });
      setMessage('');
    }
  };

  return (
    <Layout pageTitle="Repl Chat">
      <div className="flex justify-start flex-wrap mb-2">
        <div className="flex-grow">
          <Input
            label="Message:"
            value={message}
            setValue={setMessage}
            submit={handleSubmit}
          />
        </div>
        <SubmitMessageButton handleSubmit={handleSubmit} />
      </div>

      <div className="flex justify-start flex-wrap mb-2">
        <ColorSelect value={color} setValue={setColor} />
      </div>
    </Layout>
  );
}
