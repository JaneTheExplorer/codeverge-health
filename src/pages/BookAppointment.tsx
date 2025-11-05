import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preSelectedDoctor = searchParams.get("doctor");

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    doctor: preSelectedDoctor || "",
    specialty: "",
    time: "",
    reason: "",
  });

  const doctors = [
    { id: "1", name: "Dr. Olive Wangari", specialty: "Cardiology" },
    { id: "2", name: "Dr. Nephat Kimani", specialty: "General Medicine" },
    { id: "3", name: "Dr. Jane Mugo", specialty: "Pediatrics" },
    { id: "4", name: "Dr. Daid Mwangi", specialty: "Orthopedics" },
    { id: "5", name: "Dr. Morraine Njoki ", specialty: "Emergency Care" },
    { id: "6", name: "Dr. Andrew Hunt", specialty: "Ophthalmology" },
    { id: "7", name: "Dr. Muthoni Wambui", specialty: "Neurology" },
    { id: "8", name: "Dr. Ephantus Kamau", specialty: "Laboratory Services" },
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment booked successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Book Appointment</h1>
            <p className="text-muted-foreground">Schedule a visit with our healthcare professionals</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Appointment Details</CardTitle>
                  <CardDescription>Fill in the information to book your appointment</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="doctor">Select Doctor</Label>
                      <Select value={formData.doctor} onValueChange={(value) => setFormData({ ...formData, doctor: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          {doctors.map((doctor) => (
                            <SelectItem key={doctor.id} value={doctor.id}>
                              {doctor.name} - {doctor.specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="specialty">Specialty</Label>
                      <Select value={formData.specialty} onValueChange={(value) => setFormData({ ...formData, specialty: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="general">General Medicine</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                          <SelectItem value="emergency care">Emergency Care</SelectItem>
                          <SelectItem value="ophthalmology">Opthalmology</SelectItem>
                          <SelectItem value="neurology">neurology</SelectItem>
                          <SelectItem value="laboratory services">Laboratory Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="reason">Reason for Visit</Label>
                      <Textarea
                        id="reason"
                        placeholder="Briefly describe your reason for the appointment..."
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button type="submit" className="flex-1">Book Appointment</Button>
                      <Button type="button" variant="outline" onClick={() => navigate("/dashboard")}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                  <CardDescription>Choose your preferred appointment date</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;
