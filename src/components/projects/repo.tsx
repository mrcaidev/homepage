import { m } from "framer-motion";
import { FiBook, FiGitBranch, FiStar } from "react-icons/fi";
import { Link } from "../common/link";

const fadeIn = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

interface IProps {
  name: string;
  description: string;
  language: string;
  color: string;
  stars: number;
  forks: number;
}

export const Repo = ({
  name,
  description,
  language,
  color,
  stars,
  forks,
}: IProps) => (
  <m.li
    variants={fadeIn}
    className="relative h-fit px-5 py-3 rounded-lg bg-slate-200 dark:bg-slate-800 shadow-md transition-bg"
  >
    <div className="flex items-center gap-x-2">
      <FiBook size="18px" className="transition-colors" />
      <h3 className="text-lg font-semibold">
        <Link
          href={"https://github.com/mrcaidev/" + name}
          className="transition-colors before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0"
        >
          {name}
        </Link>
      </h3>
    </div>
    <p className="py-1 text-sm text-slate-600 dark:text-slate-400 transition-colors truncate">
      {description}
    </p>
    <div className="flex gap-x-4">
      <div className="flex items-center gap-x-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
        />
        <p className="text-sm transition-colors">{language}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <FiStar size="12px" className="transition-colors" />
        <p className="text-sm transition-colors">{stars}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <FiGitBranch size="12px" className="transition-colors" />
        <p className="text-sm transition-colors">{forks}</p>
      </div>
    </div>
  </m.li>
);
