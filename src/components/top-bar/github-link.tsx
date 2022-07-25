import { FiGithub } from "react-icons/fi";
import { Link } from "../common/link";

export const GithubLink = () => (
  <Link
    href="https://github.com/mrcaidev/homepage"
    className="h-fit p-2 rounded-md hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700 transition-colors"
  >
    <FiGithub size="24px" />
  </Link>
);
