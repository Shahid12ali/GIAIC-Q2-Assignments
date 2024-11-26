import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-slate-800 py-4 px-10">
        <nav className="flex justify-between items-center">
          <div className="logo text-yellow-500 text-3xl font-bold">
            Book Shop
          </div>
          <ul className=" text-yellow-500 md:flex hidden justify-center items-center gap-10">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <Link href="/" className="cursor-pointer">
              About
            </Link>
            <Link href="/" className="cursor-pointer">
              All Books
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
