"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

const categoryColors = {
  Science: "bg-blue-100 text-blue-700",
  Story: "bg-amber-100 text-amber-700",
  Tech: "bg-emerald-100 text-emerald-700",
};

export default function AllBooksPage({ searchParams }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1a365d] font-serif mb-2">
          All Books
        </h1>
        <p className="text-sm text-[#8a8aaa]">
          Browse our full collection of curated titles
        </p>
      </div>

      <div className="relative mb-8">
        <BsSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a8aaa]"
          size={15}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or author..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-[#d8d0c4] rounded-xl text-sm text-[#1a1a2e] outline-none focus:border-[#1a365d] transition-colors"
        />
      </div>

      <div className="flex gap-8">
        <div className="w-44 flex-shrink-0">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#8a8aaa] mb-3">
            Categories
          </p>
          {["All", "Story", "Tech", "Science"].map((cat) => (
            <div
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-2 rounded-lg text-sm cursor-pointer mb-1 font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? "bg-[#1a365d] text-white"
                  : "text-[#4a4a6a] hover:bg-[#f0ece4]"
              }`}
            >
              {cat === "All" ? "All Books" : cat}
            </div>
          ))}
        </div>

        <BooksGrid search={search} activeCategory={activeCategory} />
      </div>
    </div>
  );
}

async function fetchBooks() {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  return res.json();
}

function BooksGrid({ search, activeCategory }) {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    fetchBooks().then((data) => {
      setBooks(data);
      setLoaded(true);
    });
  }

  const filtered = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All" || book.category === activeCategory;
    return matchSearch && matchCategory;
  });

  if (!loaded) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#1a365d]" />
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {filtered.length === 0 ? (
        <div className="col-span-4 text-center py-20 text-[#8a8aaa]">
          No books found.
        </div>
      ) : (
        filtered.map((book) => (
          <div
            key={book.id}
            className="bg-white border border-[#d8d0c4] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="relative h-52 bg-[#e8e2d8] overflow-hidden">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
