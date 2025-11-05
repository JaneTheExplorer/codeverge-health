import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { toast } from "sonner";
import { downloadMedicalRecord } from "@/utils/downloadHelpers";

const MedicalRecords = () => {
  const handleDownload = (record: typeof records[0]) => {
    downloadMedicalRecord(record.id, record.type, record.date, record.doctor, record.diagnosis);
    toast.success("Medical record downloaded successfully!");
  };

  const records = [
    {
      id: 1,
      date: "2025-10-15",
      type: "General Checkup",
      doctor: "Dr. Nephat Kimani",
      diagnosis: "Healthy - Regular checkup completed",
      fileSize: "2.5 MB",
    },
    {
      id: 2,
      date: "2025-08-22",
      type: "Blood Test Results",
      doctor: "Dr. Jane Mugo",
      diagnosis: "All parameters within normal range",
      fileSize: "1.2 MB",
    },
    {
      id: 3,
      date: "2025-06-10",
      type: "X-Ray Report",
      doctor: "Dr. David Mwangi",
      diagnosis: "No abnormalities detected",
      fileSize: "3.8 MB",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Medical Records</h1>
              <p className="text-muted-foreground">Access and download your medical documents</p>
            </div>
            <Link to="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>

          <div className="space-y-4">
            {records.map((record) => (
              <Card key={record.id} className="shadow-soft hover:shadow-medium transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{record.type}</CardTitle>
                        <CardDescription className="mt-1">
                          {record.doctor} • {record.date}
                        </CardDescription>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleDownload(record)}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Diagnosis: </span>
                      {record.diagnosis}
                    </p>
                    <p className="text-xs text-muted-foreground">File size: {record.fileSize}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {records.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No medical records found</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MedicalRecords;
