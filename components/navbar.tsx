"use client";

import { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeroUINavbar
      isBordered
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
    >
      <style>{`
        .rl-nav-link {
          background: linear-gradient(90deg, #1D9E75 0%, #378ADD 50%, #D4537E 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          font-weight: 600;
          animation: rl-title-shimmer 8s ease-in-out infinite;
        }
        @keyframes rl-title-shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rl-nav-link { animation: none; }
        }
      `}</style>
      <NavbarContent className="basis-1/5 sm:basis-full justify-start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium",
            )}
            href="/"
            onPress={handleMenuClose}
          >
            <Logo />
            <p className="font-bold text-inherit pl-2" />{" "}
            {/*Saved for logo name*/}
          </Link>
        </NavbarBrand>

        <ul className="hidden md:flex gap-4 justify-start ml-2 ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                aria-label={`Navigate to ${item.label}`}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                  item.label === "RL" && "rl-nav-link",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="md:hidden " justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="end">
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                aria-label={`Navigate to ${item.label}`}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                  item.label === "RL" && "rl-nav-link",
                )}
                href={item.href}
                onClick={handleMenuClose}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
