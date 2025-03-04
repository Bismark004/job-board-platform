import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";


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
  const { id } = req.query;
  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  res.status(200).json(job);
}


export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/jobs/${id}`) // Fetch job by ID
        .then((res) => res.json())
        .then((data) => {
          setJob(data);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!job) return <p>Job not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100">
      <button onClick={() => router.push("/jobs")} className="flex items-center text-blue-600 mb-4">
        <ArrowLeft className="mr-2" /> Back to Jobs
      </button>
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-lg font-semibold">{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <p>{job.type}</p>
      <p className="mt-4">{job.description}</p>

      <h2 className="text-xl font-semibold mt-6">Requirements</h2>
      <ul className="list-disc pl-6 mt-2">
        {job.requirements.map((req: string, index: number) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Apply Now</button>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">
          Save Job
        </button>
      </div>
    </div>
  );
}
