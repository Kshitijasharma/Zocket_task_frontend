"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setLoading(false);
    
    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="mt-2 text-center text-gray-500">Sign in to continue</p>

        {message && (
          <p className="mt-4 text-center text-sm text-red-500 bg-red-100 p-2 rounded-lg">
            {message}
          </p>
        )}

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`mt-6 w-full py-3 rounded-lg text-white font-semibold transition 
          ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
