"use client";

import { Printer } from "lucide-react";

export function PrintCertificateButton() {
  return <button className="recognition-print" type="button" onClick={() => window.print()}><Printer size={15} /> Print or save as PDF</button>;
}
