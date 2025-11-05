import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Download } from "lucide-react";
import { toast } from "sonner";
import { downloadReceipt } from "@/utils/downloadHelpers";

const Billing = () => {
  const bills = [
    {
      id: 1,
      date: "2025-10-15",
      service: "General Checkup",
      doctor: "Dr. Nephat Kimani",
      amount: 150,
      status: "Paid",
    },
    {
      id: 2,
      date: "2025-08-22",
      service: "Blood Test",
      doctor: "Dr. Jane Mugo",
      amount: 85,
      status: "Paid",
    },
    {
      id: 3,
      date: "2025-11-01",
      service: "X-Ray Scan",
      doctor: "Dr. Andrew Hunt",
      amount: 200,
      status: "Pending",
    },
  ];

  const handlePayNow = (billId: number) => {
    toast.success("Payment processed successfully!");
  };

  const handleDownloadReceipt = (bill: typeof bills[0]) => {
    downloadReceipt(bill.id, bill.service, bill.amount, bill.date, bill.doctor);
    toast.success("Receipt downloaded successfully!");
  };

  const totalDue = bills
    .filter((bill) => bill.status === "Pending")
    .reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Billing & Payments</h1>
              <p className="text-muted-foreground">View and manage your medical bills</p>
            </div>
            <Link to="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Due</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">${totalDue}</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Pending Bills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">
                  {bills.filter((b) => b.status === "Pending").length}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">Paid This Year</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">
                  ${bills.filter((b) => b.status === "Paid").reduce((sum, b) => sum + b.amount, 0)}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>All your medical bills and payment records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bills.map((bill) => (
                  <div
                    key={bill.id}
                    className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{bill.service}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {bill.doctor} • {bill.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-foreground text-lg">${bill.amount}</p>
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded-full ${
                              bill.status === "Paid"
                                ? "bg-success/10 text-success"
                                : "bg-accent/10 text-accent"
                            }`}
                          >
                            {bill.status}
                          </span>
                        </div>
                        {bill.status === "Pending" ? (
                          <Button size="sm" onClick={() => handlePayNow(bill.id)}>
                            Pay Now
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" onClick={() => handleDownloadReceipt(bill)}>
                            <Download className="h-4 w-4 mr-2" />
                            Receipt
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Billing;
