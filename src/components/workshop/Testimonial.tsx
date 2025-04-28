
import { Card, CardContent } from "@/components/ui/card";

const Testimonial = () => {
  return (
    <section className="py-16 bg-workshop-blue/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="text-4xl font-serif text-gray-300 mb-4">"</div>
            <p className="text-xl mb-4">
              I never thought using AI could be this easy and natural!
            </p>
            <p className="text-gray-600">— Workshop Participant</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Testimonial;
