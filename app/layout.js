import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Tunifypro - Best Hearing Aids & Audiologist Services in Dehradun | Signia, Widex, Phonak',
  description: 'Leading hearing aid center in Dehradun offering premium hearing solutions from Signia, Widex, Phonak, ReSound. Expert audiologist consultation, hearing tests, and personalized hearing aid fitting services.',
  icons: {
    icon: '/tunifyprologo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
