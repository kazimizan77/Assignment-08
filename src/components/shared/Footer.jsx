import Link from "next/link";
import {
  BsBook,
  BsFacebook,
  BsTwitterX,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white mt-16">
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#e8a020] rounded-lg flex items-center justify-center">
                  <BsBook color="#fff" size={16} />
                </div>
                <span className="text-[17px] font-bold font-serif">
                  Book<span className="text-[#e8a020]">Nest</span>
                </span>
              </div>
            </div>
            <p className="text-[13px] text-white/60 leading-relaxed max-w-[280px] mb-5">
              A seamless digital library experience. Explore, borrow, and read
              thousands of titles from anywhere.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <BsFacebook size={16} />, href: "#" },
                { icon: <BsTwitterX size={16} />, href: "#" },
                { icon: <BsGithub size={16} />, href: "#" },
                { icon: <BsLinkedin size={16} />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/70 no-underline hover:bg-[#c8860a] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#e8a020] mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "All Books", href: "/all-books" },
                { label: "My Profile", href: "/my-profile" },
                { label: "Log in", href: "/login" },
                { label: "Register", href: "/register" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] text-white/60 no-underline hover:text-[#e8a020] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#e8a020] mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: <MdEmail size={15} />, text: "support@booknest.com" },
                { icon: <MdPhone size={15} />, text: "+880 1700-000000" },
                {
                  icon: <MdLocationOn size={15} />,
                  text: "Chattogram, Bangladesh",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[13px] text-white/60"
                >
                  <span className="text-[#e8a020]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-5 flex items-center justify-between flex-wrap gap-2">
          <p className="text-[12px] text-white/40">
            &copy; 2025 BookNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
