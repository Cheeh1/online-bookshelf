import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "./context/authContext";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Bookshelf",
  description: "A library for saving reading progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
