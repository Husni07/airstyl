import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airstayl",
  description: "Stay With Style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div id="top"></div>
        {children}
        <ScrollToTop/>
        <Footer />
      </body>
    </html>
  );
}
