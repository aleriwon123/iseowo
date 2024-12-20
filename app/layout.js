import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Iseowo | The Freelance Spot for Creators",
  description: "Post and get freelance gigs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Nav/>
          {children}
          <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}
