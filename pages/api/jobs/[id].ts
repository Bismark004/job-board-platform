import { NextApiRequest, NextApiResponse } from "next";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "📍 New York",
    salary: "💰 80,000-100,000",
    type: "🟢 Remote",
    description: "We are looking for a skilled Software Engineer to join our innovative tech team.",
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
    description: "We are seeking an experienced Product Manager to lead our product strategy.",
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
  const { id } = req.query;

  if (req.method === "GET") {
    if (id) {
      const job = jobs.find((j) => j.id === Number(id));
      if (job) {
        return res.status(200).json(job);
      }
      return res.status(404).json({ message: "Job not found" });
    }

    return res.status(200).json(jobs);
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
