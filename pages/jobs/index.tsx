import { useState, useEffect } from 'react';
import JobCard from '@/components/JobCard';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
}

export default function JobsListing() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('/api/jobs'); // ✅ Correct endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (loading) return <div className="text-center py-10">Loading jobs...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Available Jobs</h1>
      {jobs.length === 0 ? (
        <p className="text-center">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
   