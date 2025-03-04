import { NextApiRequest, NextApiResponse } from "next";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "📍 New York",
    salary: "💰 80,000-100,000",
    type: "🟢 Remote",
    description: "We are looking for a skilled Software Engineer.",
    requirements: ["Proficiency in JavaScript", "Experience with React"],
  },
  {
    id: 2,
    title: "Product Manager",
    company: "BizSolutions",
    location: "📍 San Francisco",
    salary: "💰 90,000-120,000",
    type: "🟢 Full-time",
    description: "Seeking an experienced Product Manager.",
    requirements: ["Agile methodology", "Strong leadership skills"],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(jobs);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}