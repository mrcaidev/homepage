import { FiGithub } from "react-icons/fi";
import { Link } from "../common/link";

export const GithubLink = () => (
  <Link
    href="https://github.com/mrcaidev/homepage"
    aria-label="View source code on GitHub"
    className="p-2 rounded-md hover:bg-dim hover:text-highlight"
  >
    <FiGithub size="24px" />
  </Link>
);
