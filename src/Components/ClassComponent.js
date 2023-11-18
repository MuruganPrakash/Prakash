// GreetingApp.js

import React, { useState } from 'react';

const GreetingApp = () => {
  // State to store the user's name
  const [userName, setUserName] = useState('');

  // Event handler for input change
  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  // Greeting message
  const greetingMessage = userName ? `Hello, ${userName}!` : 'Please enter your name';

  return (
    <div>
      <h1>{greetingMessage}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default GreetingApp;
