import { m } from "framer-motion";
import arch from "public/arch.svg";
import docker from "public/docker.svg";
import nestjs from "public/nestjs.svg";
import reactjs from "public/reactjs.svg";
import skills from "src/data/skills.json";
import { useLocaleValue } from "src/hooks/locale.hook";
import { Section } from "../common/section";
import { Card } from "./card";

const rise = {
  down: {
    y: 30,
    opacity: 0,
  },
  up: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

export const Skills = () => {
  const content = useLocaleValue(skills.en, skills.zh);

  return (
    <Section id="skills">
      <m.div
        initial="down"
        whileInView="up"
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8"
      >
        <m.div variants={rise}>
          <Card img={reactjs} title="Frontend" content={content.frontend} />
        </m.div>
        <m.div variants={rise}>
          <Card img={nestjs} title="Backend" content={content.backend} />
        </m.div>
        <m.div variants={rise}>
          <Card img={docker} title="DevOps" content={content.devops} />
        </m.div>
        <m.div variants={rise}>
          <Card img={arch} title="Others" content={content.others} />
        </m.div>
      </m.div>
    </Section>
  );
};
