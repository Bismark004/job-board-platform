import { withAuth } from '@/components/withAuth';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Employer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Add dashboard cards */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Posted Jobs</h3>
          {/* Job stats */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Applications</h3>
          {/* Application stats */}
        </div>
      </div>
    </div>
  );
};

export default withAuth(['employer'])(Dashboard);