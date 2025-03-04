import Link from "next/link";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-sm">{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <p>{job.type}</p>
      <Link href={`/jobs/${job.id}`}>
        <button className="mt-4 bg-[#1f3c88] text-[#f6f5f5] hover:bg-[#ee6f57] p-2 rounded-lg">
          View Details
        </button>
      </Link>
    </div>
  );
}