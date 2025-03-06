import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements?: string[]; // Optional in case it's missing from the API response
}

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; // Ensure we have an ID before making the request

    async function fetchJobDetails() {
      console.log("Fetching job details for ID:", id); // Debugging

      try {
        const response = await fetch(`/api/jobs/${id}`);
        const data = await response.json();

        console.log("Fetched job data:", data); // Debugging

        if (!response.ok) {
          throw new Error(data.message || "Job not found");
        }

        setJob(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchJobDetails();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading job details...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!job) return <div className="text-center py-10">Job not found</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 min-h-screen">
      <button 
        onClick={() => router.push("/jobs")} 
        className="flex items-center text-blue-600 mb-4 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft className="mr-2" /> Back to Jobs
      </button>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        
        <div className="mb-4">
          <p className="text-lg font-semibold">{job.company}</p>
          <div className="flex space-x-4 text-gray-600 mt-2">
            <span>{job.location}</span>
            <span>{job.salary}</span>
            <span>{job.type}</span>
          </div>
        </div>

        <div className="border-t pt-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-700 mb-6">{job.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {job.requirements?.length ? (
              job.requirements.map((req, index) => <li key={index}>{req}</li>)
            ) : (
              <li>No specific requirements listed.</li>
            )}
          </ul>
        </div>

        <div className="mt-8 flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Apply Now
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Save Job
          </button>
        </div>
      </div>
    </div>
  );
}
