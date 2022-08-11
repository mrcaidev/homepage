import Image from "next/image";
import logo from "public/logo.svg";
import contacts from "src/data/contacts.json";
import navLinks from "src/data/nav-links.json";
import { Link } from "../common/link";
import { NavColumn } from "./nav-column";

const year = new Date().getFullYear();

export const Footer = () => (
  <footer className="p-16 mt-8 bg-dim shadow-inner">
    <div className="flex justify-center items-center gap-16 flex-wrap-reverse max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-y-2">
        <Image src={logo} alt="logo" width="44" height="60" />
        <Link
          href="https://mrcai.space"
          className="px-2 py-1 font-bold text-xl hover:text-highlight"
        >
          mrcai.space
        </Link>
        <small className="text-xs text-dim text-center">
          Copyright © {year} Yuwang Cai. All Rights Reserved.
        </small>
      </div>
      <div className="grow flex justify-evenly items-start gap-16">
        <NavColumn title="LINKS">
          {navLinks.map(({ id, name, href }) => (
            <Link
              key={id}
              href={href}
              className="px-2 py-1 hover:text-highlight"
            >
              {name}
            </Link>
          ))}
        </NavColumn>
        <NavColumn title="CONTACTS">
          {contacts.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="px-2 py-1 hover:text-highlight"
            >
              {name}
            </Link>
          ))}
        </NavColumn>
      </div>
    </div>
  </footer>
);
