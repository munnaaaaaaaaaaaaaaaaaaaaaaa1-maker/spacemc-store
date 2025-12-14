export const metadata = {
  title: "SpaceMC Store",
  description: "Official SpaceMC Rank Store"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
