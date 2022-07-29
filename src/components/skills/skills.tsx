import { m } from "framer-motion";
import arch from "public/arch.svg";
import docker from "public/docker.svg";
import nestjs from "public/nestjs.svg";
import reactjs from "public/reactjs.svg";
import { useLocaleValue } from "src/hooks/locale.hook";
import skills from "src/i18n/skills.json";
import { Section } from "../common/section";
import { Card } from "./card";

export const Skills = () => {
  const text = useLocaleValue(skills.en, skills.zh);

  return (
    <Section id="skills">
      <m.div
        initial="hide"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8"
      >
        <Card img={reactjs} title="Frontend" content={text.frontend} />
        <Card img={nestjs} title="Backend" content={text.backend} />
        <Card img={docker} title="DevOps" content={text.devops} />
        <Card img={arch} title="Others" content={text.others} />
      </m.div>
    </Section>
  );
};
