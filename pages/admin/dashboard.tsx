// pages/admin/dashboard.tsx
import { withAuth } from '@/components/withAuth';
import AdminDashboard from '@/components/AdminDashboard';

export const AdminDashboardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <AdminDashboard />
      
    </div>
  );
};

export default withAuth(['admin'])(AdminDashboardPage);