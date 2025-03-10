import { withAuth } from '@/components/withAuth';
import { useForm } from 'react-hook-form';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

type ProfileForm = {
  fullName: string;
  skills: string;
  experience: string;
  resume: FileList;
};

const ProfilePage = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { register, handleSubmit } = useForm<ProfileForm>();

  const onSubmit = async (data: ProfileForm) => {
    const formData = new FormData();
    formData.append('full_name', data.fullName);
    formData.append('skills', data.skills);
    formData.append('experience', data.experience);
    if (data.resume[0]) formData.append('resume', data.resume[0]);

    try {
      await api.patch(`/profile/${user?.id}/`, formData);
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            {...register('fullName')}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Skills</label>
          <textarea
            {...register('skills')}
            className="w-full p-3 border rounded-lg h-32"
            placeholder="List your skills separated by commas"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Experience</label>
            <select
              {...register('experience')}
              className="w-full p-3 border rounded-lg"
            >
              <option value="0-2">0-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Resume</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              {...register('resume')}
              className="w-full p-1 border rounded-lg"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#1f3c88] text-white px-6 py-3 rounded-lg hover:bg-[#ee6f57]"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default withAuth()(ProfilePage);