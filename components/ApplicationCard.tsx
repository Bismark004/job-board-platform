import { Clock, CheckCircle, XCircle } from "lucide-react";

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  status: "submitted" | "reviewed" | "accepted" | "rejected";
  date: string;
}

const statusConfig = {
  submitted: { color: "bg-blue-200", icon: <Clock className="w-5 h-5" /> },
  reviewed: { color: "bg-yellow-200", icon: <Clock className="w-5 h-5" /> },
  accepted: { color: "bg-green-200", icon: <CheckCircle className="w-5 h-5" /> },
  rejected: { color: "bg-red-200", icon: <XCircle className="w-5 h-5" /> },
};

const ApplicationCard = ({ application }: { application: Application }) => {
  const { color, icon } = statusConfig[application.status];

  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{application.jobTitle}</h3>
          <p className="text-gray-600">{application.company}</p>
        </div>
        <span className={`${color} p-2 rounded-full`}>{icon}</span>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">{application.date}</span>
        <button className="text-[#1f3c88] hover:text-[#ee6f57] font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};
export default ApplicationCard;