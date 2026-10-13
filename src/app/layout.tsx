import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Emperor Jay Enterprises — Building Future Innovators",
  description:
    "Emperor Jay Enterprises partners with schools to deliver hands-on IT courses and digital skills training — coding, robotics, graphics design, web development, solar power and CBT systems. Small but mighty.",
  keywords: [
    "Emperor Jay Enterprises",
    "IT training for schools",
    "digital skills",
    "coding for kids",
    "Scratch",
    "Python",
    "robotics",
    "web development",
    "CBT software",
    "ICT lab setup",
    "Nigeria",
  ],
  authors: [{ name: "Emperor Jay Enterprises" }],
  openGraph: {
    title: "Emperor Jay Enterprises — Building Future Innovators",
    description:
      "Hands-on IT courses and digital skills training for schools. Coding, robotics, design, web development, solar power and CBT systems.",
    type: "website",
    siteName: "Emperor Jay Enterprises",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
