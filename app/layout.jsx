import "./globals.css";

export const metadata = {
  title: "SpaceMC Store",
  description: "Official SpaceMC Minecraft Rank Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f1117] text-white">
        {children}
      </body>
    </html>
  );
}
