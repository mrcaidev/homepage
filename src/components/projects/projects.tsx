import { motion } from "framer-motion";
import { useStats } from "src/hooks/stats.hook";
import { Section } from "../common/section";
import { LanguageCard } from "./language-card";
import { Repo } from "./repo";

export const Projects = () => {
  const { topLangs, repos } = useStats();

  return (
    <Section id="projects">
      <div className="grid grid-cols-3 justify-center gap-8 w-full sm:px-16 md:px-8 xl:px-32 2xl:px-48">
        <motion.ul
          initial="hide"
          whileInView="show"
          transition={{ staggerChildren: 0.2 }}
          className="col-span-3 md:col-span-1 flex flex-col gap-y-2"
        >
          {topLangs.map(({ name, percentage, color }) => (
            <LanguageCard
              key={name}
              name={name}
              percentage={percentage}
              color={color}
            />
          ))}
        </motion.ul>
        <motion.ul
          initial="hide"
          whileInView="show"
          transition={{ staggerChildren: 0.2 }}
          className="col-span-3 md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 h-fit"
        >
          {repos.map(({ name, description, stars, forks, language, color }) => (
            <Repo
              key={name}
              name={name}
              description={description}
              stars={stars}
              forks={forks}
              language={language}
              color={color}
            />
          ))}
        </motion.ul>
      </div>
    </Section>
  );
};
