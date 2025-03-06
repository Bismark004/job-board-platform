import { NextApiRequest, NextApiResponse } from "next";
import { jobs, Job } from '@/pages/api/jobs/index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    const job = jobs.find((j: Job) => j.id === Number(id));
    
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    
    return res.status(200).json(job);
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}