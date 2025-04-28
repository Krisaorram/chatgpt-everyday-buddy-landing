
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to meet your new everyday buddy?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Sign up now and discover how easy, practical, and fun AI can be! Let's make ChatGPT part of your everyday life — not something to fear.
        </p>
        <Button size="lg" className="bg-workshop-blue text-gray-800 hover:bg-workshop-blue/90">
          Reserve Your Spot Today
        </Button>
      </div>
    </section>
  );
};

export default CTA;
