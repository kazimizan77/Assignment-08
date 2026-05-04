import Link from "next/link";
import {
  BsBook,
  BsFacebook,
  BsTwitterX,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white mt-10">
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-7 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#e8a020] rounded-lg flex items-center justify-center">
                <BsBook color="#fff" size={16} />
              </div>
              <span className="text-[17px] font-bold font-serif">
                Book<span className="text-[#e8a020]">Nest</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-[260px]">
              A seamless digital library experience. Explore, borrow, and read
              thousands of titles from anywhere, anytime.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#e8a020] mb-5">
              About Us
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About BookNest", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Feedback", href: "#" },
                { label: "Accessibility", href: "#" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[12px] text-white/60 no-underline hover:text-[#e8a020] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#e8a020] mb-5">
              Social Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <BsFacebook />,
                  label: "Facebook",
                  href: "#",
                },
                {
                  icon: <BsInstagram />,
                  label: "Instagram",
                  href: "#",
                },
                {
                  icon: <BsTwitterX />,
                  label: "Twitter/X",
                  href: "#",
                },

                {
                  icon: <BsLinkedin />,
                  label: "LinkedIn",
                  href: "#",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="flex items-center gap-2 text-[13px] text-white/60 no-underline hover:text-[#e8a020] transition-colors duration-200"
                >
                  <span className="text-[#e8a020]">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#e8a020] mb-5">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: <MdEmail size={14} />, text: "support@booknest.com" },
                { icon: <MdPhone size={14} />, text: "+880 1700-000000" },
                {
                  icon: <MdLocationOn size={14} />,
                  text: "Dhaka, Bangladesh",
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

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/40">
            &copy; 2026 BookNest. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item, i) => (
              <span
                key={i}
                className="text-[12px] text-white/40 cursor-pointer hover:text-white/70 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
