import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/slices/authSlices";
import api from "@/services/api";

type UserRole = 'job_seeker' | 'employer';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'job_seeker' as UserRole,
    company: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = formData.role === 'employer' ? 
        { ...formData, company_name: formData.company } : 
        formData;

      const response = await api.post("/auth/register/", payload);
      
      dispatch(setCredentials({
        user: {
          email: response.data.email,
          role: response.data.role
        },
        token: response.data.access
      }));

      router.push(response.data.role === 'employer' ? '/dashboard' : '/jobs');
    } catch (err) {
        console.error("Signup error", err);
      setError('Registration failed. Please try again.');
    }

  };
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f5f5]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-[#070d59]">Sign Up</h2>
        
        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#070d59]">I am a:</label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value as UserRole})}
            className="w-full p-2 border rounded-lg"
          >
            <option value="job_seeker">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
        </div>

        {/* Conditional Company Field */}
        {formData.role === 'employer' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#070d59]">Company Name</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
        )}

        {/* Common Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#070d59]">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-[#070d59]">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-[#ee6f57] text-white p-2 rounded-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;