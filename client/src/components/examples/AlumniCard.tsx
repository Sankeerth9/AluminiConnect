import AlumniCard from '../AlumniCard';

export default function AlumniCardExample() {
  const mockAlumni = {
    id: "1",
    name: "Sarah Johnson",
    graduationYear: 2018,
    company: "Google",
    location: "San Francisco, CA",
    skills: ["Software Engineering", "Machine Learning", "Python"],
    email: "sarah.johnson@example.com"
  };

  return <AlumniCard alumni={mockAlumni} />;
}