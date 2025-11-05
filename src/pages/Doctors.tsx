import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [specialty, setSpecialty] = useState("all");
  const [location, setLocation] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Available Doctors
  const doctors = [
    {
      id: 1,
      name: "Dr. Olive Wangari",
      specialty: "Cardiology",
      location: "New York",
      rating: 4.9,
      experience: "15 years",
      availableToday: true,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Dr. Nephat Kimani",
      specialty: "General Medicine",
      location: "Los Angeles",
      rating: 4.8,
      experience: "12 years",
      availableToday: true,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Dr. Jane Mugo",
      specialty: "Pediatrics",
      location: "Chicago",
      rating: 4.9,
      experience: "10 years",
      availableToday: false,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Dr. David Mwangi",
      specialty: "Orthopedics",
      location: "New York",
      rating: 4.7,
      experience: "18 years",
      availableToday: true,
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Dr. Morraine Njoki",
      specialty: "Emergency Care",
      location: "Kenya",
      rating: 4.7,
      experience: "11 years",
      availableToday: true,
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Dr. Andrew Hunt",
      specialty: "Ophthalmology",
      location: "India",
      rating: 4.7,
      experience: "12 years",
      availableToday: true,
      image: "/placeholder.svg",
    },
    {
      id: 7,
      name: "Dr. Muthoni Wambui",
      specialty:"Neurology",
      location: "Kenya",
      rating: 4.7,
      experience: "15 years",
      availableToday: true,
      image: "/placeholder.svg",
    },
    {
      id: 8,
      name: "Dr. Ephantus Kamau",
      specialty: "Laboratory Services",
      location: "Kenya",
      rating: 4.7,
      experience: "9 years",
      availableToday: true,
      image: "/placeholder.svg",
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty = specialty === "all" || doctor.specialty === specialty;
    const matchesLocation = location === "all" || doctor.location === location;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-hero py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Find a Doctor</h1>
            <p className="text-muted-foreground">Search for healthcare professionals by specialty, location, and availability</p>
          </div>

          <Card className="mb-8 shadow-medium">
            <CardHeader>
              <CardTitle>Search Filters</CardTitle>
              <CardDescription>Filter doctors by specialty, location, or name</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search by Name</label>
                  <Input
                    placeholder="Doctor's name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Specialty</label>
                  <Select value={specialty} onValueChange={setSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Specialties" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specialties</SelectItem>
                      <SelectItem value="Cardiology">Cardiology</SelectItem>
                      <SelectItem value="General Medicine">General Medicine</SelectItem>
                      <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="Orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="Neurology">Neurology</SelectItem>
                      <SelectItem value="Ophthalmology">Opthalmology</SelectItem>
                      <SelectItem value="Laboratory Services">Laboratory Services</SelectItem>
                      <SelectItem value="Emergency Care">Emergency Care</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="New York">New York</SelectItem>
                      <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                      <SelectItem value="Chicago">Chicago</SelectItem>
                      <SelectItem value="Kenya">Kenya</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="shadow-soft hover:shadow-medium transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{doctor.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        {doctor.rating} Rating
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{doctor.specialty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{doctor.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                  {doctor.availableToday && (
                    <span className="inline-block px-2 py-1 text-xs bg-success/10 text-success rounded-full">
                      Available Today
                    </span>
                  )}
                  <Link to={`/appointments/book?doctor=${doctor.id}`} className="block">
                    <Button className="w-full mt-2">Book Appointment</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <Card className="text-center py-12">
              <p className="text-muted-foreground">No doctors found matching your criteria.</p>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
