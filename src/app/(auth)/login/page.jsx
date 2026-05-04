"use client";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BsBook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.signIn.email({ email, password });

    if (error) {
      toast.error(error.message || "Login failed!");
      setLoading(false);
      return;
    }

    toast.success("Welcome back!");
    router.push("/");
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 bg-[#1a365d] rounded-lg flex items-center justify-center">
            <BsBook color="#fff" size={18} />
          </div>
          <span className="text-xl font-bold text-[#1a365d] font-serif">
            Book<span className="text-[#c8860a]">Nest</span>
          </span>
        </div>

        <div className="bg-white border border-[#d8d0c4] rounded-2xl p-8 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c8860a]">
            Welcome back
          </span>
          <h1 className="text-2xl font-bold text-[#1a365d] font-serif mt-1 mb-1">
            Log in to BookNest
          </h1>
          <p className="text-sm text-[#8a8aaa] mb-7">
            Continue your reading journey
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium text-[#4a4a6a] block mb-1.5">
                Email address
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 bg-[#f5f0e8] border border-[#d8d0c4] rounded-lg text-sm text-[#1a1a2e] outline-none focus:border-[#1a365d] transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-[#4a4a6a] block mb-1.5">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="Type Password"
                className="w-full px-4 py-2.5 bg-[#f5f0e8] border border-[#d8d0c4] rounded-lg text-sm text-[#1a1a2e] outline-none focus:border-[#1a365d] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-full bg-[#1a365d] text-white border-none hover:bg-[#c8860a] h-11 text-sm font-semibold transition-colors duration-200 mt-1"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#d8d0c4]" />
            <span className="text-xs text-[#8a8aaa]">or</span>
            <div className="flex-1 h-px bg-[#d8d0c4]" />
          </div>

          <button
            onClick={handleGoogle}
            className="btn w-full bg-white border border-[#d8d0c4] text-[#4a4a6a] hover:bg-[#f5f0e8] h-11 text-sm font-medium gap-2 transition-colors duration-200"
          >
            <FcGoogle size={18} />
            Continue with Google
          </button>

          <p className="text-xs text-center text-[#8a8aaa] mt-6">
            No account?{" "}
            <Link
              href="/register"
              className="text-[#1a365d] font-semibold no-underline hover:text-[#c8860a]"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
