import { useState } from 'react';

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = async () => {
    const res = await fetch('/api/chatbot', {
      method: 'POST',
      body: JSON.stringify({ query: message }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <h2>AI Career Chatbot</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask me about careers"
      />
      <button onClick={handleChat}>Ask</button>
      <p>{response}</p>
    </div>
  );
}
