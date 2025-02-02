import Chatbot from '../components/Chatbot';
import SkillAssessment from '../components/SkillAssessment';
import CareerRecommendations from '../components/CareerRecommendations';

export default function Home() {
  return (
    <div className="container">
      <h1>AI-Based Career Hub</h1>
      <CareerRecommendations />
      <SkillAssessment />
      <Chatbot />
    </div>
  );
}
