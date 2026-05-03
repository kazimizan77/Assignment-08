import Link from "next/link";
import Image from "next/image";
import { readFileSync } from "fs";
import { join } from "path";

async function getBooks() {
  const filePath = join(process.cwd(), "public", "data.json");
  const data = readFileSync(filePath, "utf-8");
  const books = JSON.parse(data);
  return books.slice(0, 4);
}

export default async function FeaturedBooks() {
  const books = await getBooks();

  const categoryColors = {
    Science: "bg-blue-100 text-blue-700",
    Story: "bg-amber-100 text-amber-700",
    Tech: "bg-emerald-100 text-emerald-700",
  };

  return (
    <section className="mt-14">
      <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-[#d8d0c4]">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-[#c8860a] rounded-full" />
          <h2 className="text-2xl font-bold text-[#1a365d] font-serif">
            Featured Books
          </h2>
        </div>
        <Link
          href="/all-books"
          className="text-sm text-[#1a365d] font-medium no-underline hover:text-[#c8860a] transition-colors duration-200"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white border border-[#d8d0c4] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="relative w-full h-72 bg-[#e8e2d8] flex items-center justify-center overflow-hidden p-4">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
              />
              <span
                className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[book.category] || "bg-gray-100 text-gray-700"}`}
              >
                {book.category}
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-bold text-[#1a1a2e] mb-1 leading-tight line-clamp-2 font-serif">
                {book.title}
              </h3>
              <p className="text-xs text-[#4a4a6a] mb-3">{book.author}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#8a8aaa]">
                  {book.available_quantity} copies
                </span>
                <Link
                  href={`/books/${book.id}`}
                  className="btn btn-xs bg-[#1a365d] text-white border-none hover:bg-[#c8860a] transition-colors duration-200 no-underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
