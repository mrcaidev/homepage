import { m, type Variants } from "framer-motion";
import { FiBook, FiGitBranch, FiStar } from "react-icons/fi";
import { type ILanguage } from "src/models/language.model";
import { type IRepository } from "src/models/repository.model";
import { Link } from "./common/link";
import { Section } from "./common/section";

const rise: Variants = {
  hide: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

const grow: Variants = {
  hide: {
    scaleX: 0,
  },
  show: {
    scaleX: 1,
    transition: { type: "tween", duration: 1 },
  },
};

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
  topLangs: ILanguage[];
  repos: IRepository[];
}

const Projects = ({ topLangs, repos }: IProps) => (
  <Section id="projects">
    <div className="grid grid-cols-3 justify-center gap-8 w-full sm:px-16 md:px-8 xl:px-32 2xl:px-48">
      <m.ul
        initial="hide"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
        className="col-span-3 md:col-span-1 flex flex-col gap-y-2"
      >
        {topLangs.map(({ name, percentage, color }) => (
          <m.li
            key={name}
            variants={rise}
            className="px-4 py-2 rounded-md bg-dim shadow-md"
          >
            <div className="flex gap-x-4 justify-between pb-1">
              <p className="font-semibold text-lg">{name}</p>
              <p className="font-semibold text-lg text-dim">{percentage}%</p>
            </div>
            <div className="rounded-full bg-slate-300 dark:bg-slate-700">
              <m.div
                variants={grow}
                initial="hide"
                whileInView="show"
                className="h-1 rounded-full origin-left"
                style={{ width: percentage + "%", backgroundColor: color }}
              />
            </div>
          </m.li>
        ))}
      </m.ul>
      <m.ul
        initial="hide"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
        className="col-span-3 md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 h-fit"
      >
        {repos.map(({ name, description, stars, forks, language, color }) => (
          <m.li
            key={name}
            variants={fadeIn}
            className="relative h-fit px-5 py-3 rounded-lg bg-dim shadow-md"
          >
            <div className="flex items-center gap-x-2">
              <FiBook size="18px" />
              <h3 className="font-semibold text-lg">
                <Link
                  href={"https://github.com/mrcaidev/" + name}
                  className="before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0"
                >
                  {name}
                </Link>
              </h3>
            </div>
            <p className="py-1 text-sm text-dim truncate">{description}</p>
            <div className="flex gap-x-4">
              <div className="flex items-center gap-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <p className="text-sm">{language}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FiStar size="12px" />
                <p className="text-sm">{stars}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FiGitBranch size="12px" />
                <p className="text-sm">{forks}</p>
              </div>
            </div>
          </m.li>
        ))}
      </m.ul>
    </div>
  </Section>
);

export default Projects;
