import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Drata AI Homepage Assistant",
  description: "Prototype by Austin Rooke using OpenAI GPT-4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
