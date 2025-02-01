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
        <link rel="canonical" href="https://haykpash.com/" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen max-w-4xl mx-auto ">
            <Navbar />
            <main className="container mx-auto max-w-4xl pt-1  flex-grow">
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

              <Divider className="w-5/6 mx-auto" />
              <div className="flex items-center gap-1 text-current text-xs">
                <p className="text-default-600">
                  <span>Copyright ©</span>
                  <span> {new Date().getFullYear()} </span>
                  <span>haykpash.</span>
                </p>
                <p className="text-default-600">All Rights Reserved.</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
