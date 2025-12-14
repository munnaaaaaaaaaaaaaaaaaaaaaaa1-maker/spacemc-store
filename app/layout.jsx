import "./globals.css";

export const metadata = {
  title: "SpaceMC Store",
  description: "Official SpaceMC Minecraft Store"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
