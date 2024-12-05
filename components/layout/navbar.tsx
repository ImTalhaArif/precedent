"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div 
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-800 bg-black/70 backdrop-blur-xl"
            : "bg-black/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="100"
              height="160"
              style={{ marginTop: "6px" }}
              className="mr-2 rounded-sm"
            />
          </Link>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-full border border-white bg-white px-4 py-1.5 text-sm text-black transition-colors hover:bg-black hover:text-white">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Dashboard"
                  labelIcon={<LayoutDashboard className="h-4 w-4 text-white" />}
                  href="/"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </div>
    </>
  );
}
