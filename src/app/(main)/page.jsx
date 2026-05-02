import Banner from "@/components/homepage/Banner";
import MarqueeSection from "@/components/homepage/MarqueeSection";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import WhyBookNest from "@/components/homepage/WhyBookNest";
import BrowseByCategory from "@/components/homepage/BrowseByCategory";

export default function Homepage() {
  return (
    <div className="pb-16">
      <Banner />
      <MarqueeSection />
      <FeaturedBooks />
      <WhyBookNest />
      <BrowseByCategory />
    </div>
  );
}