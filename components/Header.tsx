import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";
import { RootState } from "../store/store";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const EmployerLinks = () => (
    <>
      <Link href="../pages/dashboard/index.tsx" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Dashboard</Link>
      <Link href="/jobs/post" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Post Job</Link>
      <Link href="../pages/applications/index.tsx" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Applications</Link>
    </>
  );

  const JobSeekerLinks = () => (
    <Link href="/applications" className="text-[#070d59] hover:text-[#ee6f57] font-medium">My Applications</Link>
  );

  return (
    <header className="fixed top-0 w-full bg-[#f6f5f5] shadow-md py-2 px-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-[#070d59] font-bold text-xl">JobBoard</div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Home</Link>
          <Link href="/jobs" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Jobs</Link>
          {user ? (
            <>
              {user.role === 'employer' ? <EmployerLinks /> : <JobSeekerLinks />}
              <Link href="/profile" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Profile</Link>
            </>
          ) : (
            <Link href="../pages/auth/Login.tsx" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Login</Link>
          )}
        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}  
        </button>

        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Home</Link>
              <Link href="/jobs" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Jobs</Link>
              {user ? (
                <>
                  {user.role === 'employer' ? <EmployerLinks /> : <JobSeekerLinks />}
                  <Link href="/profile" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Profile</Link>
                </>
              ) : (
                <Link href="/auth/login" className="text-[#070d59] hover:text-[#ee6f57] font-medium">Login</Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
