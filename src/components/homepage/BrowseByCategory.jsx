import Link from "next/link";
import Image from "next/image";

export default function BrowseByCategory() {
  const categories = [
    {
      name: "Story",
      image: "/categories/story.png",
      count: 4,
      description:
        "Fiction, novels, and timeless tales that transport you to another world.",
      color: "bg-amber-50 border-amber-200 hover:border-amber-400",
      badge: "bg-amber-100 text-amber-700",
    },
    {
      name: "Science",
      image: "/categories/science.png",
      count: 4,
      description:
        "Explore the universe, nature, and the mysteries of the world around us.",
      color: "bg-blue-50 border-blue-200 hover:border-blue-400",
      badge: "bg-blue-100 text-blue-700",
    },
    {
      name: "Tech",
      image: "/categories/tech.png",
      count: 4,
      description:
        "Programming, software, and the cutting edge of modern technology.",
      color: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
      badge: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <section className="mt-14">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#d8d0c4]">
        <div className="w-1 h-6 bg-[#c8860a] rounded-full" />
        <h2 className="text-2xl font-bold text-[#1a365d] font-serif">
          Browse by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={`/all-books?category=${cat.name}`}
            className={`border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 no-underline ${cat.color}`}
          >
            <div className="w-16 h-16">
              <Image
                src={cat.image}
                alt={cat.name}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-lg font-bold text-[#1a365d] font-serif">
                {cat.name}
              </h3>
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cat.badge}`}
              >
                {cat.count} books
              </span>
            </div>
            <p className="text-sm text-[#4a4a6a] leading-relaxed">
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
