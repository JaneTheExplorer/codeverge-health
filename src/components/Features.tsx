import { FileText, CreditCard, Bell, Shield } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Medical Records",
    description: "Access your complete medical history, test results, and prescriptions anytime, anywhere.",
    color: "text-primary",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Secure online payment options for consultations, treatments, and medical services.",
    color: "text-accent",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss an appointment with automated notifications and health reminders.",
    color: "text-success",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Your medical data is encrypted and protected with industry-leading security standards.",
    color: "text-primary",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Better Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools you need to manage your health journey effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg bg-muted mb-4 ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
