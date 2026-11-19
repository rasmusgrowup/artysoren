import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Søren Holberg | Billedkunstner fra Sydfyn",
  description: "Jeg har malet siden 2021, hvor jeg blev optaget af akvarellens muligheder for at bevæge sig mellem det genkendelige og det flydende og mere abstrakte. Akvarellen tog mig med på en rejse, som har gjort, at jeg nu er blevet billedkunstner og underviser, hvilket jeg før 2021 aldrig havde forestillet mig.",
  icons: {
    icon: "/icon.png?v=2",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
