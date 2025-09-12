import StoryCard from '../StoryCard';

export default function StoryCardExample() {
  const mockStory = {
    id: "1",
    title: "From Student to CTO: My Journey at Google",
    content: "After graduating in 2018, I joined Google as a software engineer. Through hard work and mentorship, I've grown to lead a team of 50+ engineers working on cutting-edge AI projects.",
    authorName: "Sarah Johnson",
    authorGradYear: 2018,
    createdAt: new Date("2025-01-10")
  };

  return <StoryCard story={mockStory} />;
}