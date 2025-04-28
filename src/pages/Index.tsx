
import Hero from "@/components/workshop/Hero";
import Features from "@/components/workshop/Features";
import Details from "@/components/workshop/Details";
import Testimonial from "@/components/workshop/Testimonial";
import Bonus from "@/components/workshop/Bonus";
import CTA from "@/components/workshop/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Details />
      <Testimonial />
      <Bonus />
      <CTA />
    </div>
  );
};

export default Index;
