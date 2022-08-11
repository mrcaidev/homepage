import { m } from "framer-motion";
import arch from "public/arch.svg";
import docker from "public/docker.svg";
import nestjs from "public/nestjs.svg";
import reactjs from "public/reactjs.svg";
import skills from "src/data/skills.json";
import { Section } from "../common/section";
import { Card } from "./card";

export const Skills = () => (
  <Section id="skills">
    <m.div
      initial="hide"
      whileInView="show"
      transition={{ staggerChildren: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 py-8"
    >
      <Card img={reactjs} title="Frontend" content={skills.frontend} />
      <Card img={nestjs} title="Backend" content={skills.backend} />
      <Card img={docker} title="DevOps" content={skills.devops} />
      <Card img={arch} title="Others" content={skills.others} />
    </m.div>
  </Section>
);
