import * as React from 'react';

import Layout from '../components/Layout';
import MessageInput from '../components/MessageInput';

import postMessage from '../services/postMessage';
import SubmitMessageButton from '../components/SubmitMessageButton';
import MessagePanelCtn from '../components/MessagePanelCtn';
import ColorSelect from '../components/ColorSelect';

export default function Home() {
  const [message, setMessage] = React.useState('');
  const [color, setColor] = React.useState('white');

  const handleSubmit = () => {
    if (message) {
      postMessage(message, { color });
    }
  };

  return (
    <Layout pageTitle="Repl Chat">
      <MessagePanelCtn>
        <MessageInput value={message} setValue={setMessage} />
        <SubmitMessageButton handleSubmit={handleSubmit} />
      </MessagePanelCtn>

      <div>
        <ColorSelect value={color} setValue={setColor} />
      </div>
    </Layout>
  );
}
