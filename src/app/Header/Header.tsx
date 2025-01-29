'use client';
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full h-16 bg-black z-50 relative">
      <h1 className="text-white pt-[14px] ml-8 text-2xl absolute font-thin z-50">Ahmed Portfolio</h1>

      {/* Desktop Menu */}
      <ul className="flex text-white justify-end mr-20 pt-[17px] gap-6 font-semibold hidden md:flex z-50">
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"#About"}><li>About</li></Link>
        <Link href={"#Skills"}><li>Skills</li></Link>
        <Link href={"#Projects"}><li>Projects</li></Link>
        <Link href={"#Contact"}><li>Contact</li></Link>
      </ul>

      {/* Mobile Menu Button */}
      <div className="z-50">
        <BiMenu
          onClick={handleClick}
          className="block justify-self-end md:hidden text-white pt-3 text-5xl mr-5 cursor-pointer z-50"
        />
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="w-full h-64 bg-black absolute top-16 left-0 z-50">
          <ul className="text-white block p-8 space-y-4 text-2xl font-semibold">
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"#About"}><li>About</li></Link>
            <Link href={"#Skills"}><li>Skills</li></Link>
            <Link href={"#Projects"}><li>Projects</li></Link>
            <Link href={"#Contact"}><li>Contact</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
}
