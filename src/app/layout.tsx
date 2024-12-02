// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import useLenis from '../components/Hooks/index'; // Adjust path as needed
import { Suspense } from "react"; // Import Suspense for lazy loading
import NProgressLoader from '../components/NProgressLoader'; // Import the NProgressLoader
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap', // Ensures faster font rendering
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

// Lazy load the Navbar and Footer components
const Navbar = dynamic(() => import("../components/Navbar"));
const Footer = dynamic(() => import("../components/Footer"));

export const metadata: Metadata = {
  title: {
    template: "Modewelt | %s",
    default: "Modewelt",
  },
  description: "Connect to the world of fashion and style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useLenis; // Use the custom Lenis hook here

  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[--background-color]`}
        style={{ overflowX: "hidden" }}  // Global background color
      >
        <NProgressLoader /> {/* Include the NProgressLoader here */}
        <Suspense fallback={<div>Loading...</div>}> {/* Fallback UI while loading */}
          <Navbar />
        </Suspense>
        <ToastContainer />
        <main className="px-4 sm:px-6 h-auto lg:px-0">
          {children}
        </main>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
