import { m, type Variants } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useLocaleValue } from "src/hooks/locale.hook";
import coverI18n from "src/i18n/cover.json";

const rise: Variants = {
  hide: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1 },
  },
};

export const DownloadCV = () => {
  const text = useLocaleValue(coverI18n.en.cv, coverI18n.zh.cv);

  return (
    <m.a
      href="cv.txt"
      download
      variants={rise}
      initial="hide"
      whileInView="show"
      className="flex items-center gap-x-2 w-fit px-4 py-2 rounded-md bg-sky-700 hover:bg-sky-600 dark:bg-sky-300 dark:hover:bg-sky-400 active:bg-sky-500 text-slate-200 dark:text-slate-800 font-semibold cursor-pointer transition-colors"
    >
      {text}
      <FiDownload size="16px" />
    </m.a>
  );
};
