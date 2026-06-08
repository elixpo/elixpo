import Navbar from "@/components/legacy/Navbar";
import Footer from "@/components/legacy/Footer";

// Layout for the original (pre-revamp) content pages. These keep the light
// theme and the classic Navbar/Footer, independent of the revamped homepage.
export default function LegacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
