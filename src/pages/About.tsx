import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Expert Doctors" },
    { icon: Heart, value: "10,000+", label: "Happy Patients" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Emergency Care" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-hero">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">About CodeVerge Health Hub</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading the way in quality healthcare with compassion, innovation, and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center shadow-soft">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="shadow-medium mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At CodeVerge Health Hub, we are committed to providing exceptional healthcare services 
                that improve the quality of life for our patients and their families. We believe in 
                treating every patient with dignity, respect, and compassion.
              </p>
              <p className="text-muted-foreground">
                Our state-of-the-art facilities and highly trained medical professionals work together 
                to deliver comprehensive care across all medical specialties. We continuously invest in 
                the latest medical technologies and treatment methods to ensure our patients receive 
                the best possible care.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    We strive for excellence in everything we do, from patient care to medical research.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Compassion</h3>
                  <p className="text-muted-foreground text-sm">
                    We treat every patient with kindness, empathy, and understanding.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-muted-foreground text-sm">
                    We embrace new technologies and methods to improve patient outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Integrity</h3>
                  <p className="text-muted-foreground text-sm">
                    We maintain the highest ethical standards in all our practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
