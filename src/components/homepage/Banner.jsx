import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative mt-6 rounded-2xl overflow-hidden min-h-[480px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/d08PxbLB/banner-book.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/95 via-[#1a365d]/80 to-[#1a365d]/20" />

      <div className="relative z-10 px-6 sm:px-10 md:px-14 py-12 md:py-16 w-full max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-[#e8a020]/15 border border-[#e8a020]/35 text-[#e8a020] text-xs font-medium px-4 py-1.5 rounded-full mb-6 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8a020] animate-pulse" />
          Digital Library — Live now
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 font-serif">
          Your next great read <br />
          is <span className="text-[#e8a020]">one click</span> away.
        </h1>

        <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-9 max-w-lg">
          Explore a curated collection of books across stories, science, and
          technology. Borrow digitally — anytime, anywhere, no late fees.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="/all-books"
            className="btn border-none text-[#1a365d] bg-[#e8a020] hover:bg-[#c8860a] px-8 h-12 text-sm font-semibold rounded-lg"
          >
            Browse Now →
          </Link>
          <button className="btn btn-outline text-white border-white/30 hover:bg-white/10 hover:border-white px-8 h-12 text-sm bg-transparent">
            How it works
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-0">
          {[
            { val: "500+", label: "Books Available" },
            { val: "3", label: "Categories" },
            { val: "1.2k+", label: "Members" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <div className="w-px h-9 bg-white/15 mx-5 sm:mx-6" />}
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white leading-none">
                  {stat.val}
                </div>
                <div className="text-xs text-white/45 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
