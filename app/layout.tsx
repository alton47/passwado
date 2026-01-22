import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Update this part specifically
export const metadata: Metadata = {
  title: "Passwado — Password Generator",
  description: "The Last Password Generator you'll ever Need!!",
  keywords: ["password", "generator", "security", "passwado"],
  icons: {
    // We prepend the repo name so GitHub Pages can find it
    icon: "/passwado/favicon.svg",
    shortcut: "/passwado/favicon.svg",
    apple: "/passwado/favicon.svg",
  },
  openGraph: {
    title: "Passwado",
    description: "The password generator to end them all!!",
    type: "website",
    images: [
      {
        url: "/passwado/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}