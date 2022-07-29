import { m } from "framer-motion";
import { type ILanguage } from "src/models/language.model";
import { type IRepository } from "src/models/repository.model";
import { Section } from "../common/section";
import { LanguageCard } from "./language-card";
import { Repository } from "./repository";

interface IProps {
  topLangs: ILanguage[];
  repos: IRepository[];
}

export const Projects = ({ topLangs, repos }: IProps) => (
  <Section id="projects">
    <div className="grid grid-cols-3 justify-center gap-8 w-full sm:px-16 md:px-8 xl:px-32 2xl:px-48">
      <m.ul
        initial="hide"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
        className="col-span-3 md:col-span-1 flex flex-col gap-y-2"
      >
        {topLangs.map((lang) => (
          <LanguageCard key={lang.name} lang={lang} />
        ))}
      </m.ul>
      <m.ul
        initial="hide"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
        className="col-span-3 md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 h-fit"
      >
        {repos.map((repo) => (
          <Repository key={repo.name} repo={repo} />
        ))}
      </m.ul>
    </div>
  </Section>
);
