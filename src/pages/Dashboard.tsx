import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, User, CreditCard, Clock, AlertCircle } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const Dashboard = () => {
  const { user } = useUser();
  
  // Upcoming Appoitments
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr.Olive Wangari",
      specialty: "Cardiology",
      date: "2025-11-15",
      time: "10:00 AM",
    },
    {
      id: 2,
      doctor: "Dr. Nephat Kimani",
      specialty: "General Medicine",
      date: "2025-11-20",
      time: "2:30 PM",
    },
     
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user?.name || ""}</h1>
              <p className="text-muted-foreground">Manage your health records and appointments.</p>
            </div>
            <Link to="/login">
              <Button variant="outline" size="sm">
                Sign Out
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <Link to="/profile">
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-semibold text-foreground hover:text-primary">
                      View Profile →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{upcomingAppointments.length}</p>
                    <p className="text-xs text-muted-foreground">Appointments</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Medical Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <FileText className="h-5 w-5 text-success" />
                  </div>
                  <Link to="/records">
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-semibold text-foreground hover:text-primary">
                      View Records →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <Link to="/billing">
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-semibold text-foreground hover:text-primary">
                      View Bills →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 shadow-medium">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled visits with healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{appointment.doctor}</h4>
                          <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">{appointment.date}</p>
                        <p className="text-sm text-muted-foreground">{appointment.time}</p>
                      </div>
                    </div>
                  ))}
                  <Link to="/appointments/book" className="block">
                    <Button className="w-full">Book New Appointment</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/appointments/book">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/records">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <FileText className="mr-2 h-4 w-4" />
                    View Medical Records
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <User className="mr-2 h-4 w-4" />
                    Find a Doctor
                  </Button>
                </Link>
                <Link to="/billing">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay Bills
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-accent/10 border-accent shadow-soft">
            <CardContent className="flex items-start gap-4 pt-6">
              <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Important Notice</h4>
                <p className="text-sm text-muted-foreground">
                  Please ensure your contact information is upto date to receive appointment reminders and important updates.<strong>Codeverge</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
