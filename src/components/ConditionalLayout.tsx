
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoshaQuizPopup from "@/components/dosha-quiz/DoshaQuizPopup";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide the public website layout on account pages
  const isAccountPage = pathname.startsWith("/account");

  if (isAccountPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />

      <main>{children}</main>

      <DoshaQuizPopup />

      <Footer />
    </>
  );
}
