import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven | Personal Portfolio",
  description:
    "Steven is a full-stack developer looking to get experience in the frontend world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
