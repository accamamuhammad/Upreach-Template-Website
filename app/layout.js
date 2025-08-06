// app/layout.js or app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Upreach-Template-Website",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* If preline.js must be in the <head>, use this instead:
        <script src="/assets/vendor/preline/dist/preline.js" defer /> */}
      </head>
      <body className={inter.className}>
        {children}
        {/* It's better to place external scripts before the closing body tag */}
        <script src="/assets/vendor/preline/dist/preline.js" defer />
      </body>
    </html>
  );
}
