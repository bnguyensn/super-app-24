import * as React from 'react';

import Layout from '../components/Layout';
import Input from '../components/Input';

import postMessage from '../services/postMessage';
import SubmitMessageButton from '../components/SubmitMessageButton';
import ColorSelect from '../components/ColorSelect';
import ReplIframe from '../components/ReplIFrame';
import { getRandomUserName } from '../utils/username';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const LOCAL_STORAGE_USERNAME_KEY = 'username';

export default function Home() {
  const [username, setUsername] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [color, setColor] = React.useState('white');

  const setAndSaveUsername = (newUsername) => {
    setUsername(newUsername);
    saveToLocalStorage(LOCAL_STORAGE_USERNAME_KEY, newUsername);
  };

  const handleSubmit = () => {
    if (message) {
      void postMessage(message, { color, username });
      setMessage('');
    }
  };

  // Run only once on the first render. This either restores a previously saved
  // username from localStorage, or generates one and stores it in localStorage.
  React.useEffect(() => {
    const localStorageUsername = getFromLocalStorage(
      LOCAL_STORAGE_USERNAME_KEY
    );

    if (localStorageUsername) {
      setAndSaveUsername(localStorageUsername);
    } else {
      setAndSaveUsername(getRandomUserName());
    }
  }, [setUsername]);

  return (
    <Layout pageTitle="Repl Chat">
      <div className="flex flex-col flex-grow">
        <div className="flex-grow flex">
          <ReplIframe />
        </div>

        <div className="flex justify-start flex-wrap pt-2 mb-4">
          <div className="flex-grow">
            <Input
              label="Message:"
              placeholder="Type your message here (max 500 chars)"
              maxlength={500}
              value={message}
              setValue={setMessage}
              submit={handleSubmit}
            />
          </div>
          <SubmitMessageButton handleSubmit={handleSubmit} />
        </div>

        <div className="flex flex-wrap mb-2 items-center">
          <div className="mr-4">
            <ColorSelect value={color} setValue={setColor} />
          </div>
          <Input
            label="Username:"
            placeholder="Choose a username"
            value={username}
            setValue={setAndSaveUsername}
          />
        </div>
      </div>
    </Layout>
  );
}
