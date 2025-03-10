import { useState } from 'react';
import StatusBadge from '@/components/StatusBadge';
import {
  Root as DropdownMenuRoot,
  Trigger as DropdownMenuTrigger,
  Content as DropdownMenuContent,
  Item as DropdownMenuItem
} from '@radix-ui/react-dropdown-menu';

interface Application {
  id: number;
  jobTitle: string;
  applicantName: string;
  status: string;
  appliedDate: string;
}

export const ApplicationManagement = ({ applications }: { applications: Application[] }) => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApplications = applications.filter(app => {
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    const matchesSearch =
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicantName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b flex items-center justify-between">
        <input
          type="text"
          placeholder="Search applications..."
          className="p-2 border rounded-lg w-64"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <DropdownMenuRoot>
          <DropdownMenuTrigger asChild>
            <button className="px-4 py-2 border rounded-lg">
              Filter by Status: {statusFilter}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white p-2 shadow-lg rounded-lg">
            {['all', 'submitted', 'reviewed', 'accepted', 'rejected'].map(status => (
              <DropdownMenuItem
                key={status}
                onSelect={() => setStatusFilter(status)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Applicant</th>
              <th className="px-6 py-3 text-left">Job Title</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Applied Date</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredApplications.map(application => (
              <tr key={application.id}>
                <td className="px-6 py-4">{application.applicantName}</td>
                <td className="px-6 py-4">{application.jobTitle}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={application.status} />
                </td>
                <td className="px-6 py-4">
                  {new Date(application.appliedDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">View Details</button>
                  <button className="text-green-600 hover:text-green-800">Contact</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
