import React, { useRef, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from './AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { createUserWithGoogle, setUser, loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        toast.success(`Welcome back ${currentUser.displayName}`);
        navigate(`${location?.state ? location.state : '/'}`);
      })
      .catch((error) => {
        toast.warning(error.code);
      });
  };

  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        toast.success(`Welcome back ${currentUser.displayName}`);
        navigate(`${location?.state ? location.state : '/'}`);
      })
      .catch(() => {
        toast.error("Google login failed.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 my-10 bg-[#F9FAFB]">
      <h2 className="text-3xl font-bold mb-6 text-[#111827]">Login Now</h2>

      <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          ref={emailRef}
          className="p-3 border border-[#9CA3AF] rounded text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
        />

        <div className="relative border border-[#9CA3AF] rounded p-1">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            required
            className="w-full p-3 pr-10 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#10B981] rounded"
          />
          <span
            onClick={togglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#9CA3AF]"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </span>
        </div>

        <div>
          <button
            type="button"
            className="text-sm text-[#10B981] hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="bg-[#10B981] text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="my-4 bg-white text-[#111827] border border-[#9CA3AF] p-3 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition w-full max-w-sm"
      >
        <FcGoogle size={24} />
        <span>Login with Google (Coming Soon)</span>
      </button>

      <p className="mt-4 text-sm text-[#111827]">
        Don’t have an account?{" "}
        <Link to="/register" className="text-[#10B981] underline font-bold">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
