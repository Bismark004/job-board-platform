import { withAuth } from '@/components/withAuth';
import { useForm } from 'react-hook-form';

type JobFormData = {
  title: string;
  description: string;
  location: string;
  salary: string;
  type: string;
};

const PostJob = () => {
  const { register, handleSubmit } = useForm<JobFormData>();
  const router = useRouter();

  const onSubmit = async (data: JobFormData) => {
    try {
      await api.post('/jobs/', data);
      router.push('/dashboard');
    } catch (error) {
      console.error('Job posting failed:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Job Title</label>
          <input
            {...register('title', { required: true })}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            {...register('description', { required: true })}
            className="w-full p-3 border rounded-lg h-32"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              {...register('location', { required: true })}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Salary</label>
            <input
              {...register('salary', { required: true })}
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Job Type</label>
          <select
            {...register('type', { required: true })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="REMOTE">Remote</option>
            <option value="CONTRACT">Contract</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#ee6f57] text-white p-3 rounded-lg hover:bg-[#e65a4a]"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default withAuth(['employer'])(PostJob);