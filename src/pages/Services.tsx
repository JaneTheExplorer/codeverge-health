import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Stethoscope, Activity, Brain, Bone, Eye, Baby, Syringe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and prevention of cardiovascular diseases.",
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary care services for routine check-ups, preventive care, and treatment of common illnesses.",
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "24/7 emergency medical services with state-of-the-art facilities and experienced staff.",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized care for neurological disorders, brain health, and nervous system conditions.",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Treatment for bone, joint, and muscle conditions including sports injuries and joint replacement.",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to advanced surgical procedures.",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents with experienced pediatricians.",
    },
    {
      icon: Syringe,
      title: "Laboratory Services",
      description: "Advanced diagnostic testing with quick results and accurate analysis.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-hero py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CodeVerge Health Hub offers comprehensive healthcare services with state-of-the-art facilities 
              and experienced medical professionals dedicated to your well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
