import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "BookNest — Digital Library",
  description: "Explore, borrow, and read books digitally.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    data-theme="light">
      <body className={`${lora.variable} ${inter.variable}`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
