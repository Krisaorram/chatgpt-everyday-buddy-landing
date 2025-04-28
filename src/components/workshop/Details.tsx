
const Details = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes This Workshop Special
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-workshop-blue mr-2">•</span>
                  <span>No tech jargon, no pressure — just real-life examples and hands-on practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-workshop-blue mr-2">•</span>
                  <span>Tips on how to talk to AI so it feels natural and helpful</span>
                </li>
                <li className="flex items-start">
                  <span className="text-workshop-blue mr-2">•</span>
                  <span>Real examples like trip planning, study help, and idea brainstorming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-workshop-blue mr-2">•</span>
                  <span>Fun group tasks and real conversations with ChatGPT</span>
                </li>
              </ul>
            </div>
            <div className="bg-workshop-green p-6 rounded-lg">
              <h3 className="font-bold mb-4">Perfect for:</h3>
              <p className="text-gray-700">
                Beginners, parents, students, seniors, and professionals — anyone curious about AI and looking for a supportive and easy introduction.
              </p>
              <div className="mt-4 p-4 bg-white rounded">
                <p className="font-semibold">Duration:</p>
                <p>1.5 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
