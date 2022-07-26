import Image from "next/future/image";
import logo from "public/logo.svg";
import { Link } from "../common/link";

export const Logo = () => (
  <div className="flex gap-x-1">
    <Image src={logo} alt="Logo" width="28" height="48" />
    <Link href="/" className="px-2 py-1 text-4xl font-black transition-colors">
      MRCAI
    </Link>
  </div>
);
