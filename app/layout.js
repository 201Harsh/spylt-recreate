import "./globals.css";

export const metadata = {
  title: "Spylt Recreate",
  description: "Animated Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-full">
        {children}
      </body>
    </html>
  );
}
