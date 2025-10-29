import { Outfit } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/provider";
import TopBar from "@/components/ui/topbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agenda Agenda",
  description: "Kumpulan kumpulan agenda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        <Provider>
          <TopBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
