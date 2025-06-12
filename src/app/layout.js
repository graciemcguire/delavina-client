import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../fonts.css";

export const metadata = {
  title: "G + A",
  description: "October 8th 2026 - Penedés, Spain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Pangaia", fontStyle: "italic" }}>
        {children}
      </body>
    </html>
  );
}
