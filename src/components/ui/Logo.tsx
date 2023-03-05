import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center text-black dark:text-white pt-0 pb-0 mr-0 cursor-pointer font-bold leading-[1em] font-body text-4xl"
    >
      <Image
        className="max-w-[48px] dark:invert"
        src={logo}
        alt="Logo"
        width={50}
        height={30}
      />
    </Link>
  );
}
