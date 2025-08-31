import { FiEye, FiEyeOff } from 'react-icons/fi';
import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, createUserWithGoogle, updateUser, setUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(prev => !prev);

  const RegisterSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;

    // Password validation
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...currentUser, displayName: name, photoURL: photoUrl });
            navigate('/');
            toast.success("Account created successfully!");
          })
          .catch((error) => {
            console.log(error);
            setUser(currentUser);
          });
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong.");
      });
  };

  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        toast.success(`Welcome back ${currentUser.displayName}`);
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        toast.error("Google login failed.");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 my-10 bg-[#F9FAFB]">
      <h2 className="text-3xl font-bold mb-6 text-[#111827]">Register Please</h2>

      <form
        className="flex flex-col space-y-4 w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg"
        onSubmit={RegisterSubmit}
      >
        <input
          className="p-3 border border-[#9CA3AF] rounded text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          className="p-3 border border-[#9CA3AF] rounded text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          type="email"
          name="email"
          placeholder="Email"
          required
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

        <input
          className="p-3 border border-[#9CA3AF] rounded text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          type="url"
          name="photoUrl"
          placeholder="Photo URL (Optional)"
        />

        <button
          type="submit"
          className="bg-[#10B981] text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Register
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="my-4 bg-white text-[#111827] border border-[#9CA3AF] p-3 rounded-lg flex items-center justify-center gap-2 shadow-md hover:bg-[#10B981] hover:text-white transition w-full max-w-sm"
      >
        <FcGoogle size={24} />
        <span>Login with Google (Coming Soon)</span>
      </button>

      <p className="text-[#111827] mt-2">
        Already have an account?{" "}
        <Link to="/login" className="text-[#10B981] underline font-bold">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
