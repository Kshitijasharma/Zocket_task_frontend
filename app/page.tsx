"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center px-6">
      {/* Navbar */}
      <nav className="w-full max-w-7xl flex justify-between items-center py-6 px-4 sm:px-10">
        <div className="text-2xl font-bold text-gray-800 hover:text-gray-900 transition-colors cursor-pointer">
          Zocket.ai
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/contact-sales")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact Sales
          </button>
          <button
            onClick={() => router.push("/login")}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Log In
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="text-center mt-20 max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          The everything app, for work
        </h1>
        <p className="text-lg text-gray-600 mt-6">
          Get everyone working in a single platform designed to manage any type of
          work.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all"
        >
          Get Started. It’s FREE →
        </button>
        <p className="text-gray-500 mt-4 text-sm">
          Free Forever. No Credit Card.
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mt-20 py-6 px-4 sm:px-10 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p>© 2023 Zocket.ai. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}