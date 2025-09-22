import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: "../public/fonts/ProximaNova-Regular.otf",
  weight: "400",
  variable: "--font-inter",
});

export const metadata = {
  title: "Spylt Recreate",
  description: "Animated Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
