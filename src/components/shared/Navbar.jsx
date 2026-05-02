"use client";
import Link from "next/link";
import { useState } from "react";
import { BsBook } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-[#1a365d] sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-6 h-[58px] flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2 no-underline">
          <div className="w-8 h-8 bg-[#1a365d] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <BsBook color="#fff" size={16} />
          </div>
          <span className="text-[17px] font-bold text-[#1a365d] font-serif">
            Book<span className="text-[#c8860a]">Nest</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {[
            { label: "Home", href: "/" },
            { label: "All Books", href: "/all-books" },
            { label: "My Profile", href: "/my-profile" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-[#4a4a6a] font-medium no-underline pb-1 border-b-2 border-transparent hover:text-[#1a365d] hover:border-[#c8860a] transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/login"
            className="text-[12px] font-medium text-[#1a365d] border-[1.5px] border-[#1a365d] px-4 py-1.5 rounded-md no-underline hover:bg-[#1a365d] hover:text-white transition-all duration-200"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="text-[12px] font-medium text-white bg-[#1a365d] px-4 py-1.5 rounded-md no-underline hover:bg-[#c8860a] transition-all duration-200"
          >
            Register
          </Link>
        </div>

        <label className="btn btn-circle swap swap-rotate md:hidden bg-transparent border-none text-[#1a365d] shadow-none">
          <input type="checkbox" onChange={() => setIsOpen(!isOpen)} />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#d8d0c4] px-6 pt-4 pb-5">
          <div className="flex flex-col gap-3 mb-4">
            {[
              { label: "Home", href: "/" },
              { label: "All Books", href: "/all-books" },
              { label: "My Profile", href: "/my-profile" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-[#1a365d] font-medium no-underline py-2 border-b border-[#f0ece4]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center text-[13px] font-medium text-[#1a365d] border-[1.5px] border-[#1a365d] py-2 rounded-md no-underline"
            >
              Log in
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center text-[13px] font-medium text-white bg-[#1a365d] py-2 rounded-md no-underline"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
