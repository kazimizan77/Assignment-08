import Link from "next/link";
import {
  BsBook,
  BsFacebook,
  BsTwitterX,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer style={{ background: "#1a365d", color: "#fff", marginTop: "60px" }}>
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "40px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#c8860a",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BsBook color="#fff" size={16} />
              </div>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  fontFamily: "Georgia, serif",
                }}
              >
                Book<span style={{ color: "#e8a020" }}>Nest</span>
                <span style={{ color: "#e8a020" }}>.</span>
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: "1.7",
                maxWidth: "280px",
                marginBottom: "20px",
              }}
            >
              A seamless digital library experience. Explore, borrow, and read
              thousands of titles from anywhere.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: <BsFacebook size={16} />, href: "#" },
                { icon: <BsTwitterX size={16} />, href: "#" },
                { icon: <BsGithub size={16} />, href: "#" },
                { icon: <BsLinkedin size={16} />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  style={{
                    width: "34px",
                    height: "34px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  className="hover:bg-[#c8860a] hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#e8a020",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
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
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="hover:text-[#e8a020]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#e8a020",
                marginBottom: "16px",
              }}
            >
              Contact Us
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <span style={{ color: "#e8a020" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
            &copy; 2025 BookNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
