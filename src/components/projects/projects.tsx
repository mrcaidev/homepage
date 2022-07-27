import { motion } from "framer-motion";
import { Section } from "../common/section";
import { LanguageCard } from "./language-card";
import { Repo } from "./repo";

const langs = [
  { name: "TypeScript", percentage: 43, color: "#9ac8e2" },
  { name: "Python", percentage: 32, color: "#9ac8e2" },
  { name: "Go", percentage: 16, color: "#9ac8e2" },
];

const projects = [
  {
    name: "uestc-temperature",
    description: "电子科技大学本科生健康打卡助手",
    language: "Python",
    color: "#9ac8e2",
    stars: 101,
    forks: 192,
  },
  {
    name: "uestc-temperature",
    description: "电子科技大学本科生健康打卡助手",
    language: "Python",
    color: "#9ac8e2",
    stars: 101,
    forks: 192,
  },
  {
    name: "uestc-temperature",
    description: "电子科技大学本科生健康打卡助手",
    language: "Python",
    color: "#9ac8e2",
    stars: 101,
    forks: 192,
  },
  {
    name: "uestc-temperature",
    description: "电子科技大学本科生健康打卡助手",
    language: "Python",
    color: "#9ac8e2",
    stars: 101,
    forks: 192,
  },
  {
    name: "uestc-temperature",
    description: "电子科技大学本科生健康打卡助手",
    language: "Python",
    color: "#9ac8e2",
    stars: 101,
    forks: 192,
  },
];

export const Projects = () => (
  <Section id="projects">
    <div className="grid grid-cols-3 justify-center gap-8 w-full sm:px-16 md:px-8 xl:px-32 2xl:px-48">
      <motion.ul
        initial="hide"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
        className="col-span-3 md:col-span-1 flex flex-col gap-y-2"
      >
        {langs.map(({ name, percentage, color }) => (
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
        className="col-span-3 md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {projects.map(
          ({ name, description, language, color, stars, forks }) => (
            <Repo
              key={name}
              name={name}
              description={description}
              language={language}
              color={color}
              stars={stars}
              forks={forks}
            />
          )
        )}
      </motion.ul>
    </div>
  </Section>
);
