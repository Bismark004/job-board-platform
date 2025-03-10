
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const withAuth = (allowedRoles: string[]) => (WrappedComponent: React.FC) => {
  const Wrapper: React.FC = (props) => {
    const router = useRouter();
    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

    if (!isAuthenticated) {
      router.push('/auth/login');
      return null;
    }

    if (user && !allowedRoles.includes(user.role)) {
      router.push('/');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};