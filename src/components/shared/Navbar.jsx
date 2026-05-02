import Link from "next/link";
import { BsBook } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        borderBottom: "2px solid #1a365d",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 2px 12px rgba(26,54,93,0.08)",
      }}
    >
      <div
        className="max-w-[1600px] mx-auto px-6"
        style={{
          height: "58px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          className="group"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#1a365d",
              borderRadius: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s ease",
            }}
            className="group-hover:scale-110"
          >
            <BsBook color="#fff" size={16} />
          </div>
          <span
            style={{
              fontSize: "17px",
              fontWeight: "700",
              color: "#1a365d",
              fontFamily: "Georgia, serif",
              transition: "color 0.2s",
            }}
          >
            Book<span style={{ color: "#c8860a" }}>Nest</span>
            <span style={{ color: "#c8860a" }}>.</span>
          </span>
        </Link>

        <div style={{ display: "flex", gap: "28px" }}>
          {[
            { label: "Home", href: "/" },
            { label: "All Books", href: "/all-books" },
            { label: "My Profile", href: "/my-profile" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: "13px",
                color: "#4a4a6a",
                textDecoration: "none",
                fontWeight: "500",
                padding: "4px 0",
                borderBottom: "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
              className="hover:text-[#1a365d] hover:border-b-[#c8860a]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <Link
            href="/login"
            style={{
              background: "transparent",
              border: "1.5px solid #1a365d",
              color: "#1a365d",
              padding: "6px 16px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "500",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            className="hover:bg-[#1a365d] hover:text-white"
          >
            Log in
          </Link>
          <Link
            href="/register"
            style={{
              background: "#1a365d",
              color: "#fff",
              padding: "6px 16px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "500",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            className="hover:bg-[#c8860a]"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
