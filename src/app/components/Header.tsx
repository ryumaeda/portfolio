import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="border-b-4 flex items-center py-4 fixed top-0 w-full bg-white">
      <Link href="/">
        <span className="text-5xl font-bold mx-10">Portfolio for Maeda</span>
      </Link>
      <Link href="/">
        <span className="mx-10 text-xl">ホーム</span>
      </Link>
      <Link href="/Inquiry">
        <span className="mx-10 text-xl">問合せ</span>
      </Link>
    </div>
  );
};

export default Header;
