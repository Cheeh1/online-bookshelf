import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import { Inter } from "next/font/google";
import "../globals.css";
import { ReduxProvider } from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="">
          <ReduxProvider>{children}</ReduxProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
};
export default ScreenLayout;
