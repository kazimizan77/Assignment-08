import Image from "next/image";

export default function WhyBookNest() {
  const features = [
    {
      image: "/categories/book.png",
      title: "Free to Borrow",
      description:
        "No membership fees, no late fines. Borrow any book from our collection completely free of charge.",
    },
    {
      image: "/categories/digital.png",
      title: "Digital Access",
      description:
        "Access your borrowed books from any device, anywhere in the world. Your library is always with you.",
    },
    {
      image: "/categories/huge.png",
      title: "Huge Collection",
      description:
        "Explore hundreds of titles across stories, science, and technology — with new arrivals every week.",
    },
  ];

  return (
    <section className="mt-14">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#d8d0c4]">
        <div className="w-1 h-6 bg-[#c8860a] rounded-full" />
        <h2 className="text-2xl font-bold text-[#1a365d] font-serif">
          Why BookNest?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white border border-[#d8d0c4] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16">
              <Image
                src={feature.image}
                alt={feature.title}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <h3 className="text-base font-bold text-[#1a365d] font-serif mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-[#4a4a6a] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
