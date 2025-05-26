export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Download & Set Up",
      description: "Install DryMode and select which apps you want to restrict."
    },
    {
      number: "02",
      title: "Schedule Your Fast",
      description: "Set specific hours when you need to stay focused."
    },
    {
      number: "03",
      title: "Stay Accountable",
      description: "Break your fast? Your streak resets. Stay dry? Build discipline."
    }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">Getting Started</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <span className="text-5xl font-mono opacity-30 mb-6 block group-hover:opacity-50 transition-opacity">{step.number}</span>
              <h3 className="text-2xl font-bold mb-5 group-hover:text-white transition-colors">{step.title}</h3>
              <p className="text-white/60 font-mono leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 