import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "plant me",
  description: "Built with Orkka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}