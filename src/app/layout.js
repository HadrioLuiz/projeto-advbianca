import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Bianca Santos | Advocacia & Consultoria Jurídica (OAB/AP 4419)",
  description:
    "Atuação especializada em recursos aos Tribunais Superiores, Direito Público e consultoria jurídica estratégica em Macapá - AP. OAB 4419/AP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-slate-50 text-slate-800 antialiased selection:bg-emerald-950 selection:text-slate-100">
        {children}
      </body>
    </html>
  );
}