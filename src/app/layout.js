import "./globals.css";

export const metadata = {
  title: "Adv Bianca Santos",
  description: "Página da advogada Bianca Santos de Souza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
