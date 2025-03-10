const StatusBadge = ({ status }: { status: string }) => {
    const statusColors: Record<string, string> = {
      submitted: 'bg-blue-100 text-blue-600',
      reviewed: 'bg-yellow-100 text-yellow-600',
      accepted: 'bg-green-100 text-green-600',
      rejected: 'bg-red-100 text-red-600',
    };
  
    return (
      <span className={`px-2 py-1 rounded text-sm ${statusColors[status] || 'bg-gray-100 text-gray-600'}`}>
        {status}
      </span>
    );
  };
  
  export default StatusBadge;
  