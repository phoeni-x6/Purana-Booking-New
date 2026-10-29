
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import DoshaQuizPopup from "@/components/dosha-quiz/DoshaQuizPopup";
export const metadata: Metadata = {
  title: "Purana Ayurveda",
  description:
    "Discover Ayurveda treatments, wellness consultations and retreats in Germany and Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f4eee4]">
        <Navbar />

        <main>{children}</main>
 <DoshaQuizPopup />
        <Footer />
      </body>
    </html>
  );
}
