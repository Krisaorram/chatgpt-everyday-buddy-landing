
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Bonus = () => {
  return (
    <section className="py-16 bg-workshop-green/50">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Bonus</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-4">
              You'll receive a "10 Everyday Prompts" handout to keep practicing at home!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Bonus;
