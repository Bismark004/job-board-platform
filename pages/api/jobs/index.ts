import { NextApiRequest, NextApiResponse } from "next";

// Define and export the Job interface first
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
}

// Export the jobs array with explicit type
export const jobs: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "New York",
    salary: "$80,000 - $100,000",
    type: "Remote",
    description: "We are looking for a skilled Software Engineer...",
    requirements: ["Proficiency in JavaScript and TypeScript",
      "Experience with React and Next.js",
      "Understanding of state management (Redux, Context API)",
      "Familiarity with RESTful API design",
      "Strong problem-solving skills"]
  },
  {
    id: 2,
    title: "Product Manager",
    company: "BizSolutions",
    location: "San Francisco",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    description: "Seeking an experienced Product Manager...",
    requirements: [ "Agile methodology expertise",
      "Strong leadership and communication skills",
      "Experience in tech product management",
      "Ability to translate business needs into product requirements",
      "Data-driven decision making"]
  }
];

// Default export for the handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const jobListings = jobs.map(({ id, title, company, location, salary, type }) => ({
    id, title, company, location, salary, type
  }));
  res.status(200).json(jobListings);
}