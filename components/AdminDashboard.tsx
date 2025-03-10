import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard ()  {
  const mockData = {
    users: [
      { id: 1, email: 'user1@example.com', role: 'job_seeker', joined: '2024-03-01' },
      { id: 2, email: 'company@example.com', role: 'employer', joined: '2024-03-05' }
    ],
    jobs: [
      { id: 1, title: 'Software Engineer', status: 'active', applications: 15 },
      { id: 2, title: 'Product Manager', status: 'pending', applications: 8 }
    ],
    statistics: [
      { name: 'Jan', users: 45, jobs: 32 },
      { name: 'Feb', users: 78, jobs: 45 },
      { name: 'Mar', users: 102, jobs: 67 }
    ]
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Platform Statistics</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData.statistics}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#1f3c88" />
                <Bar dataKey="jobs" fill="#ee6f57" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Recent Users</h3>
          <div className="space-y-3">
            {mockData.users.map(user => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{user.email}</p>
                  <p className="text-sm text-gray-600">{user.role}</p>
                </div>
                <span className="text-sm text-gray-500">{user.joined}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Job Moderation</h3>
          <div className="space-y-4">
            {mockData.jobs.map(job => (
              <div key={job.id} className="p-3 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{job.title}</p>
                    <p className="text-sm">Applications: {job.applications}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm 
                    ${job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {job.status}
                  </span>
                </div>
                <div className="mt-2 flex space-x-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    View
                  </button>
                  <button className="text-sm text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};