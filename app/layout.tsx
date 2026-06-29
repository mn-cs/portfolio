import "@/styles/globals.css";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import Script from "next/script";

import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T29GPCFH');
            `,
          }}
          id="gtm-script"
          strategy="afterInteractive"
        />
        {/* End Google Tag Manager */}
        <meta
          content="Ju9v4ymkCxJzPMLmV7iGjxqPNLUjMthdP4UGCSBFN-c"
          name="google-site-verification"
        />
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="/apple-icon.png" rel="apple-touch-icon" sizes="180x180" />

        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/manifest.json" rel="manifest" />
        <link
          href="/favicon-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link
          href="/favicon-512x512.png"
          rel="icon"
          sizes="512x512"
          type="image/png"
        />
        <link
          href="/favicon-96x96.png"
          rel="icon"
          sizes="96x96"
          type="image/png"
        />
        <link rel="canonical" href="https://michaelhayk.com/" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T29GPCFH"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen max-w-4xl mx-auto ">
            <Navbar />

            <main className="container mx-auto max-w-4xl flex-grow">
              {children}
            </main>
            {/* <AskBox />  */}
            <footer className="w-full py-4  text-white flex flex-col items-center space-y-2">
              <div className="flex justify-end items-center space-x-4 mb-7 mt-5">
                <Link
                  aria-label="Github"
                  href={siteConfig.links.github}
                  isExternal
                >
                  <GithubIcon className="text-default-500 w-8 h-8" />
                </Link>
                <Link
                  aria-label="LinkedIn"
                  href={siteConfig.links.linkedin}
                  isExternal
                >
                  <LinkedInIcon className="text-default-500 w-8 h-8" />
                </Link>
              </div>

              <Divider className="w-[96%] mx-auto" />
              <div className="flex items-center gap-1 text-current text-xs">
                <p className="text-default-600">
                  <span>©</span>
                  <span> {new Date().getFullYear()} </span>
                  <span>Michael Hayk</span>
                </p>
                <p className="text-default-600" />
              </div>
            </footer>
          </div>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
