import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkedIn Content Repurposer – Turn One Blog Post Into 10 LinkedIn Posts",
  description: "AI transforms long-form content into LinkedIn carousels, single posts, and video scripts with engagement optimization. Perfect for marketing agencies, consultants, and B2B content creators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5cbbf281-c73b-45a8-8b59-018cb8266199"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
