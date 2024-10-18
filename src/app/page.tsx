import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebiners from "@/components/UpComingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>   
       <HeroSection />
       <FeatureCourses/>
       <WhyChooseUs/>
       <TestimonialCards/>
       <UpComingWebiners />
       <Instructors />
       <Footer />
    </>
  );
}
