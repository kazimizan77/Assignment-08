"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#1a365d]" />
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({ name, image });

    if (error) {
      toast.error(error.message || "Update failed!");
      setLoading(false);
      return;
    }

    toast.success("Profile updated successfully!");
    setLoading(false);
    router.push("/my-profile");
  };

  return (
    <div className="max-w-lg mx-auto py-14">

      <Link
        href="/my-profile"
        className="inline-flex items-center gap-2 text-sm text-[#4a4a6a] no-underline hover:text-[#1a365d] transition-colors mb-8"
      >
        <BsArrowLeft size={16} />
        Back to Profile
      </Link>

      <div className="bg-white border border-[#d8d0c4] rounded-2xl p-8 shadow-sm">

        <span className="text-xs font-semibold uppercase tracking-widest text-[#c8860a]">
          Edit profile
        </span>
        <h1 className="text-2xl font-bold text-[#1a365d] font-serif mt-1 mb-1">
          Update Information
        </h1>
        <p className="text-sm text-[#8a8aaa] mb-7">
          Update your name and profile photo
        </p>

        <div className="flex items-center gap-4 mb-7 p-4 bg-[#f5f0e8] rounded-xl border border-[#d8d0c4]">
          {session.user.image ? (
            <img
              src={session.user.image}
              alt={session.user.name}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-full object-cover border-2 border-[#1a365d]"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-[#1a365d] flex items-center justify-center text-white text-xl font-bold">
              {session.user.name?.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-[#1a365d]">{session.user.name}</p>
            <p className="text-xs text-[#8a8aaa]">{session.user.email}</p>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-medium text-[#4a4a6a] block mb-1.5">
              Full name
            </label>
            <input
              name="name"
              type="text"
              required
              defaultValue={session.user.name}
              className="w-full px-4 py-2.5 bg-[#f5f0e8] border border-[#d8d0c4] rounded-lg text-sm text-[#1a1a2e] outline-none focus:border-[#1a365d] transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-[#4a4a6a] block mb-1.5">
              Photo URL
            </label>
            <input
              name="image"
              type="url"
              defaultValue={session.user.image || ""}
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2.5 bg-[#f5f0e8] border border-[#d8d0c4] rounded-lg text-sm text-[#1a1a2e] outline-none focus:border-[#1a365d] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-[#1a365d] text-white border-none hover:bg-[#c8860a] h-11 text-sm font-semibold transition-colors duration-200 mt-2"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>

      </div>
    </div>
  );
}