import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'P N RAO Fine Suits - Bespoke Tailoring Bangalore',
  description: 'Experience unparalleled craftsmanship at P N RAO Fine Suits, Indiranagar. Handcrafted bespoke menswear for discerning gentlemen in Bangalore, blending tradition with timeless style.',
  openGraph: {
    "title": "P N RAO Fine Suits - Bespoke Tailoring Bangalore",
    "description": "Experience unparalleled craftsmanship at P N RAO Fine Suits, Indiranagar. Handcrafted bespoke menswear for discerning gentlemen in Bangalore, blending tradition with timeless style.",
    "url": "/",
    "siteName": "P N RAO Fine Suits",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/high-angle-thimble-silk_23-2148897938.jpg",
        "alt": "Man in a perfectly tailored suit"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "P N RAO Fine Suits - Bespoke Tailoring Bangalore",
    "description": "Experience unparalleled craftsmanship at P N RAO Fine Suits, Indiranagar. Handcrafted bespoke menswear for discerning gentlemen in Bangalore, blending tradition with timeless style.",
    "images": [
      "http://img.b2bpic.net/free-photo/high-angle-thimble-silk_23-2148897938.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
