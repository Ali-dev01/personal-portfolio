import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import SideNav from "@/layout/side-nav";
import Header from "@/layout/header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ali Hassan",
  description: "Let's connect for building awesome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <div className="flex">
          <aside className="md:w-20 w-0">
            <SideNav />
          </aside>
          <div id="home" className="flex-1">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
