import { BsBookHalf, BsCloudCheck, BsCollection } from "react-icons/bs";

export default function WhyBookNest() {
  const features = [
    {
      icon: <BsBookHalf size={28} />,
      title: "Free to Borrow",
      description:
        "No membership fees, no late fines. Borrow any book from our collection completely free of charge.",
    },
    {
      icon: <BsCloudCheck size={28} />,
      title: "Digital Access",
      description:
        "Access your borrowed books from any device, anywhere in the world. Your library is always with you.",
    },
    {
      icon: <BsCollection size={28} />,
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
            className="bg-white border border-[#d8d0c4] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-[#1a365d]/08 rounded-xl flex items-center justify-center text-[#1a365d] mb-4 group-hover:bg-[#1a365d] group-hover:text-white transition-all duration-300">
              {feature.icon}
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