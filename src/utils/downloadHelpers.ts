export const downloadReceipt = (billId: number, service: string, amount: number, date: string, doctor: string) => {
  const receiptContent = `
CODEVERGE HEALTH HUB
Payment Receipt
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Receipt ID: #${billId.toString().padStart(6, '0')}
Date: ${date}

SERVICE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service: ${service}
Provider: ${doctor}
Amount: $${amount}
Status: PAID

Thank you for choosing CodeVerge Health!

For questions, contact us at:
Email: billing@codevergehealth.com
Phone: +254757217053
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim();

  const blob = new Blob([receiptContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `receipt-${billId}-${date}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const downloadMedicalRecord = (recordId: number, type: string, date: string, doctor: string, diagnosis: string) => {
  const recordContent = `
CODEVERGE HEALTH 
Medical Record
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Record ID: #${recordId.toString().padStart(6, '0')}
Date: ${date}

MEDICAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type: ${type}
Attending Physician: ${doctor}
Diagnosis: ${diagnosis}

This is an official medical record from CodeVerge Health.
For verification or questions, please contact:

Medical Records Department
Email: records@codevergehealth.com
Phone: +254757217053
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONFIDENTIAL MEDICAL RECORD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim();

  const blob = new Blob([recordContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `medical-record-${recordId}-${date}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
