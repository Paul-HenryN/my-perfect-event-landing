import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Perfect Event | Trouvez des professionnels pour vos événements",
  description:
    "Trouvez et réservez facilement des professionnels pour vos événements : DJ, traiteur, photographe, et bien plus. Notre plateforme met en relation particuliers et prestataires qualifiés pour des événements réussis. Organisez sans stress et en toute confiance !",
  openGraph: {
    title: "Trouvez des professionnels pour vos événements",
    description:
      "Organisez vos événements sans stress avec notre marketplace qui vous connecte à des prestataires qualifiés.",
    url: "https://my-perfect-event.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "min-h-screen text-foreground bg-noise",
          dmSans.className
        )}
      >
        <Navbar />

        {children}

        <FooterSection />
      </body>
    </html>
  );
}
