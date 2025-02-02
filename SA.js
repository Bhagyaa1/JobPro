import { useState } from 'react';

export default function SkillAssessment() {
  const [skills, setSkills] = useState('');
  const [assessmentResult, setAssessmentResult] = useState('');

  const handleAssessment = async () => {
    const res = await fetch('/api/skills', {
      method: 'POST',
      body: JSON.stringify({ skills }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setAssessmentResult(data.result);
  };

  return (
    <div>
      <h2>Skill Assessment</h2>
      <input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Enter your skills"
      />
      <button onClick={handleAssessment}>Assess</button>
      <p>{assessmentResult}</p>
    </div>
  );
}
