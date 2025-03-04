import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/slices/authSlices";
import api from "@/services/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => { // ✅ Add event type
    e.preventDefault();
    try {
      const response = await api.post("/auth/login/", { email, password });

      
      dispatch(setCredentials(response.data));

    
      if (response.data.access && response.data.refresh) {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
      }

      router.push("/dashboard");
    } catch (err){
        console.error("Login error:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f5f5]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-[#070d59]">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#070d59]">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#070d59]">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-[#ee6f57] text-white p-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
