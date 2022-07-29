import { Contacts } from "./contacts";
import { Logo } from "./logo";
import { Sections } from "./sections";
import { Wave } from "./wave";

export const Footer = () => (
  <footer>
    <Wave />
    <div className="px-10 py-10 bg-white dark:bg-black transition-bg">
      <div className="flex justify-center items-center gap-x-4 gap-y-12 flex-wrap-reverse max-w-5xl mx-auto">
        <Logo />
        <div className="grow-[2] flex justify-evenly items-start gap-x-4">
          <Sections />
          <Contacts />
        </div>
      </div>
    </div>
  </footer>
);
