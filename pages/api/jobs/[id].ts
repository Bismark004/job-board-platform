import { NextApiRequest, NextApiResponse } from "next";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "📍 New York",
    salary: "💰 80,000-100,000",
    type: "🟢 Remote",
    description: "We are looking for a skilled Software Engineer to join our innovative tech team. The ideal candidate will have strong programming skills and experience with modern web technologies.",
    requirements: [
      "Proficiency in JavaScript and TypeScript",
      "Experience with React and Next.js",
      "Understanding of state management (Redux, Context API)",
      "Familiarity with RESTful API design",
      "Strong problem-solving skills"
    ],
  },
  {
    id: 2,
    title: "Product Manager",
    company: "BizSolutions",
    location: "📍 San Francisco",
    salary: "💰 90,000-120,000",
    type: "🟢 Full-time",
    description: "We are seeking an experienced Product Manager to lead our product strategy and drive innovation. The ideal candidate will have a proven track record of successful product development.",
    requirements: [
      "Agile methodology expertise",
      "Strong leadership and communication skills",
      "Experience in tech product management",
      "Ability to translate business needs into product requirements",
      "Data-driven decision making"
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
      res.status(200).json(jobs);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }