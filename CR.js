import { useState } from 'react';

export default function CareerRecommendations() {
  const [userData, setUserData] = useState('');
  const [recommendations, setRecommendations] = useState('');

  const getRecommendations = async () => {
    const res = await fetch('/api/recommendations', {
      method: 'POST',
      body: JSON.stringify({ userData }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setRecommendations(data.recommendations);
  };

  return (
    <div>
      <h2>Career Recommendations</h2>
      <input
        type="text"
        value={userData}
        onChange={(e) => setUserData(e.target.value)}
        placeholder="Enter your details (skills, education)"
      />
      <button onClick={getRecommendations}>Get Recommendations</button>
      <p>{recommendations}</p>
    </div>
  );
}
