
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
        alt="Person using laptop"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ChatGPT, Your Everyday Companion
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          A friendly 1.5-hour basics course — Learn to use AI like a pro!
        </p>
        <Button size="lg" className="bg-workshop-blue text-gray-800 hover:bg-workshop-blue/90">
          Reserve Your Spot Today
        </Button>
      </div>
    </div>
  );
};

export default Hero;
