import * as React from 'react';

import Send from './icons/Send';

export default function SubmitMessageButton({ handleSubmit }) {
  return (
    <button
      className="w-10 h-10 bg-green-500 p-2 rounded"
      onClick={handleSubmit}
    >
      <Send fill="#ffffff" />
    </button>
  );
}
