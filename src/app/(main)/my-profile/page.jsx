"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [borrowedCount, setBorrowedCount] = useState(0);

  useEffect(() => {
    if (!session) return;
    const storageKey = `borrowedBooks_${session?.user?.email}`;
    const borrowedBooks = JSON.parse(localStorage.getItem(storageKey) || "[]");
    setBorrowedCount(borrowedBooks.length);
  }, [session]);

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

  return (
    <div className="max-w-2xl mx-auto py-14">
      <div className="bg-white border border-[#d8d0c4] rounded-2xl overflow-hidden shadow-sm">
        <div className="px-8 pb-8">
          <div className="my-4">
            {session.user.image ? (
              <img
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md"
              />
            ) : (
              <div className="w-20 h-20 rounded-full border-4 border-white bg-[#1a365d] flex items-center justify-center text-white text-2xl font-bold shadow-md">
                {session.user.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <h1 className="text-2xl font-bold text-[#1a365d] font-serif mb-1">
            {session.user.name}
          </h1>
          <div className="flex items-center gap-2 text-sm text-[#8a8aaa] mb-6">
            <MdEmail size={15} />
            {session.user.email}
          </div>

          <div className="flex border border-[#d8d0c4] rounded-xl overflow-hidden mb-6">
            {[
              { val: borrowedCount, label: "Borrowed" },
              { val: borrowedCount, label: "Active" },
              { val: 0, label: "Returned" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex-1 py-4 text-center ${i < 2 ? "border-r border-[#d8d0c4]" : ""}`}
              >
                <div className="text-xl font-bold text-[#1a365d]">
                  {stat.val}
                </div>
                <div className="text-xs text-[#8a8aaa] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/my-profile/update"
            className="btn bg-transparent border-[1.5px] border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-all duration-200 no-underline"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
