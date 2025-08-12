import "./globals.css";

export const metadata = {
  title: "Upreach-Template-Website",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="sans-serif">
      <head>
        {/* If preline.js must be in the <head>, use this instead:
        <script src="/assets/vendor/preline/dist/preline.js" defer /> */}
      </head>
      <body style={{ fontFamily: "sans-serif" }}>
        {children}
        {/* It's better to place external scripts before the closing body tag */}
        <script src="/assets/vendor/preline/dist/preline.js" defer />
      </body>
    </html>
  );
}
