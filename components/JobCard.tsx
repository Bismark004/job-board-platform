import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { saveJob, unsaveJob } from '@/store/slices/savedJobsSlice';
import { Bookmark } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
}

export default function JobCard({ job }: { job: Job }) {
  const dispatch = useDispatch();
  const savedJobs = useSelector((state: RootState) => state.savedJobs.jobs); // Access jobs array
  const isSaved = savedJobs.some((savedJob: Job) => savedJob.id === job.id);

  const handleSaveToggle = () => {
    if (isSaved) {
      dispatch(unsaveJob(job.id));
    } else {
      dispatch(saveJob(job));
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow relative">
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
      <button
        onClick={handleSaveToggle}
        className={`absolute top-2 right-2 p-2 rounded-full ${isSaved ? 'text-red-500 bg-red-100' : 'text-gray-500 bg-gray-100'}`}
      >
        <Bookmark className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} />
      </button>
    </div>
  );
}
