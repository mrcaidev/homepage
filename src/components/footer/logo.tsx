import Image from "next/future/image";
import logo from "public/logo.svg";

export const Logo = () => (
  <div className="grow flex flex-col items-center gap-y-3">
    <Image src={logo} alt="logo" width="44" height="60" />
    <p className="text-xl font-bold transition-colors">mrcai.space</p>
    <small className="text-xs text-slate-600 dark:text-slate-400 text-center transition-colors">
      Copyright © 2022 Yuwang Cai. All Rights Reserved.
    </small>
  </div>
);
