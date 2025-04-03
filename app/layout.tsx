import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Divider } from "@nextui-org/react";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

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
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T29GPCFH');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <meta
          name="google-site-verification"
          content="Ju9v4ymkCxJzPMLmV7iGjxqPNLUjMthdP4UGCSBFN-c"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />

        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="canonical" href="https://www.michaelbennett.dev/" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
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

            <footer className="w-full py-4  text-white flex flex-col items-center space-y-2">
              <div className="flex justify-end items-center space-x-4 mb-7 mt-5">
                <Link
                  isExternal
                  aria-label="Github"
                  href={siteConfig.links.github}
                >
                  <GithubIcon className="text-default-500 w-8 h-8" />
                </Link>
                <Link
                  isExternal
                  aria-label="LinkedIn"
                  href={siteConfig.links.linkedin}
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
                <p className="text-default-600"></p>
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
