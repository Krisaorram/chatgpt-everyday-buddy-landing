
import { Heart, Calendar, Notebook, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Natural Conversations",
    description: "Chat naturally with ChatGPT — like talking to a smart, helpful friend"
  },
  {
    icon: Calendar,
    title: "Practical Usage",
    description: "Use ChatGPT for meal planning, writing, learning, gift ideas, and more"
  },
  {
    icon: Notebook,
    title: "Better Results",
    description: "Learn how to ask questions and challenge ChatGPT to get better results"
  },
  {
    icon: Heart,
    title: "Your Language",
    description: "Use your own language (Croatian, Slovenian, or English — whatever feels natural)"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-workshop-green">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
