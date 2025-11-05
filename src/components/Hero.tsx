import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Health,
              <span className="block text-primary">Our Priority</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Experience world-class healthcare with CodeVerge Hospital. Book appointments, 
              manage medical records, and connect with expert doctors - all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg" className="shadow-medium hover:shadow-strong transition-all">
                  Get Started
                </Button>
              </Link>
              <Link to="/doctors">
                <Button size="lg" variant="outline">
                  Find Doctors Available Today
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all">
              <Calendar className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Easy Booking</h3>
              <p className="text-sm text-muted-foreground">Schedule appointments in seconds</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all mt-8">
              <Users className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Expert Doctors</h3>
              <p className="text-sm text-muted-foreground">Top specialists at your service</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all">
              <Award className="h-8 w-8 text-success mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Certified Care</h3>
              <p className="text-sm text-muted-foreground">Accredited medical excellence</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all mt-8">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here when you need us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
