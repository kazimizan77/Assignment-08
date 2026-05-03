"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { BsBookmark, BsCheckCircle } from "react-icons/bs";

export default function BorrowBook({ book }) {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [borrowed, setBorrowed] = useState(false);

  useEffect(() => {
    const borrowedBooks = JSON.parse(
      localStorage.getItem("borrowedBooks") || "[]",
    );
    const alreadyBorrowed = borrowedBooks.some((b) => b.id === book.id);
    setBorrowed(alreadyBorrowed);
  }, [book.id]);

  const handleBorrow = () => {
    if (!session) {
      toast.error("Please login to borrow a book!");
      router.push("/login");
      return;
    }

    if (borrowed) {
      toast("You have already borrowed this book!");
      return;
    }

    const borrowedBooks = JSON.parse(
      localStorage.getItem("borrowedBooks") || "[]",
    );
    borrowedBooks.push({ id: book.id, title: book.title });
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    setBorrowed(true);

    toast.success(`"${book.title}" borrowed successfully!`);
  };

  return (
    <button
      onClick={handleBorrow}
      className={`inline-flex items-center gap-2 px-8 h-12 rounded-lg font-semibold text-sm transition-all duration-200 ${
        borrowed
          ? "bg-emerald-50 text-emerald-700 border-2 border-emerald-300 cursor-not-allowed"
          : "bg-[#e8a020] text-[#1a365d] hover:bg-[#c8860a] hover:text-white border-2 border-transparent"
      }`}
    >
      {borrowed ? (
        <>
          <BsCheckCircle size={16} />
          Already Borrowed
        </>
      ) : (
        <>
          <BsBookmark size={16} />
          Borrow This Book
        </>
      )}
    </button>
  );
}
