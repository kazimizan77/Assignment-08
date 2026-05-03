import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import BorrowButton from "@/components/ui/BorrowBook";

async function getBook(id) {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const books = await res.json();
  return books.find((book) => book.id === id);
}

export default async function BookDetailsPage({ params }) {
  const { id } = await params;
  const book = await getBook(id);

  const categoryColors = {
    Science: "bg-blue-100 text-blue-700",
    Story: "bg-amber-100 text-amber-700",
    Tech: "bg-emerald-100 text-emerald-700",
  };

  if (!book) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-[#1a365d] font-serif mb-4">
          Book not found!
        </h2>
        <Link
          href="/all-books"
          className="btn bg-[#1a365d] text-white border-none hover:bg-[#c8860a]"
        >
          Back to All Books
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-5xl mx-auto">
      <Link
        href="/all-books"
        className="inline-flex items-center gap-2 text-sm text-[#4a4a6a] no-underline hover:text-[#1a365d] transition-colors mb-8"
      >
        <BsArrowLeft size={16} />
        Back to All Books
      </Link>

      <div className="bg-white border border-[#d8d0c4] rounded-2xl overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-80 bg-[#f0ece4] flex items-center justify-center p-5 shrink-0">
            <div className="relative w-52 h-80 drop-shadow-2xl">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="p-8 flex flex-col justify-between flex-1">
            <div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[book.category] || "bg-gray-100 text-gray-700"}`}
              >
                {book.category}
              </span>

              <h1 className="text-3xl font-bold text-[#1a365d] font-serif mt-4 mb-1 leading-tight">
                {book.title}
              </h1>

              <p className="text-sm text-[#8a8aaa] mb-1">
                by{" "}
                <span className="font-medium text-[#4a4a6a]">
                  {book.author}
                </span>
              </p>

              <div className="border-t border-[#f0ece4] my-5" />

              <p className="text-sm text-[#4a4a6a] leading-relaxed mb-6">
                {book.description}
              </p>

              <div className="flex items-center gap-2 mb-8 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 w-fit">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm text-emerald-700 font-medium">
                  {book.available_quantity} copies available
                </span>
              </div>
            </div>
            <BorrowButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
}
