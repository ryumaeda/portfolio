import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center py-4 sticky top-0 w-full bg-black text-white z-10">
      <Link href="/">
        <span className="text-3xl font-medium mx-10">Mcreate</span>
      </Link>
      <Link href="/">
        <span className="mx-10 text-xl">Home</span>
      </Link>
      <Link href="/policy">
        <span className="mx-10 text-xl">Policy</span>
      </Link>
      <div className="ml-auto mr-10">
        <Link href="https://github.com/ryumaeda?tab=repositories">
          <span className="flex items-center px-4 py-2 bg-gray-800 rounded-full text-lg">
            <Image
              src="/images/github-mark-white.png"
              alt="GitHub"
              width={20}
              height={20}
              className="mr-2"
            />
            GitHub
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
