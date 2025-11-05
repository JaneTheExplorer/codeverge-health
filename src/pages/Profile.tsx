import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, FileText, CreditCard, Edit } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  // User Data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    address: "123 Main St, New York, NY 10001",
    bloodType: "A+",
    allergies: "Penicillin",
  });

  const medicalRecords = [
    {
      id: 1,
      date: "2025-10-15",
      type: "General Checkup",
      doctor: "Dr. Morraine Njoki",
      diagnosis: "Healthy",
    },
    {
      id: 2,
      date: "2025-08-22",
      type: "Blood Test",
      doctor: "Dr. Ephantus Kamau",
      diagnosis: "Normal results",
    },
  ];

  const billingHistory = [
    {
      id: 1,
      date: "2025-10-15",
      service: "General Checkup",
      amount: "$150",
      status: "Paid",
    },
    {
      id: 2,
      date: "2025-08-22",
      service: "Blood Test",
      amount: "$85",
      status: "Paid",
    },
  ];

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">My Profile</h1>
            <p className="text-muted-foreground">Manage your personal information and medical records</p>
          </div>

          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto">
              <TabsTrigger value="personal">
                <User className="h-4 w-4 mr-2" />
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="medical">
                <FileText className="h-4 w-4 mr-2" />
                Medical Records
              </TabsTrigger>
              <TabsTrigger value="billing">
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={userData.name}
                          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={userData.email}
                          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={userData.phone}
                          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={userData.dateOfBirth}
                          onChange={(e) => setUserData({ ...userData, dateOfBirth: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="blood">Blood Type</Label>
                        <Input
                          id="blood"
                          value={userData.bloodType}
                          onChange={(e) => setUserData({ ...userData, bloodType: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="allergies">Allergies</Label>
                        <Input
                          id="allergies"
                          value={userData.allergies}
                          onChange={(e) => setUserData({ ...userData, allergies: e.target.value })}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={userData.address}
                          onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full md:w-auto">
                      <Edit className="h-4 w-4 mr-2" />
                      Update Profile
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medical">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Medical Records</CardTitle>
                  <CardDescription>View your medical history and records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicalRecords.map((record) => (
                      <div
                        key={record.id}
                        className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-foreground">{record.type}</h4>
                            <p className="text-sm text-muted-foreground mt-1">Dr. {record.doctor}</p>
                            <p className="text-sm text-muted-foreground">Diagnosis: {record.diagnosis}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">{record.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>View your payment history and invoices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {billingHistory.map((bill) => (
                      <div
                        key={bill.id}
                        className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-foreground">{bill.service}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{bill.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-foreground">{bill.amount}</p>
                            <span className="inline-block px-2 py-1 text-xs bg-success/10 text-success rounded-full mt-1">
                              {bill.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Link to="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
