import * as React from 'react';

export default function SubmitMessageButton({ handleSubmit }) {
  return (
    <button className="btn" onClick={handleSubmit}>
      Submit
    </button>
  );
}
