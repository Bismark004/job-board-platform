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
    <div className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{job.company}</p>
      <div className="flex items-center gap-2 text-sm mb-3">
        <span>{job.location}</span>
        <span>•</span>
        <span>{job.type}</span>
      </div>
      <p className="font-medium text-blue-600">{job.salary}</p>
      <Link href={`/jobs/${job.id}`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </Link>
    </div>
  );
}