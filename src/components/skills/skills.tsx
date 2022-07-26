import { motion } from "framer-motion";
import arch from "public/arch.svg";
import docker from "public/docker.svg";
import nestjs from "public/nestjs.svg";
import reactjs from "public/reactjs.svg";
import { Bold } from "../common/bold";
import { Section } from "../common/section";
import { Card } from "./card";

const rise = {
  down: {
    y: 30,
    opacity: 0,
  },
  back: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

export const Skills = () => (
  <Section id="skills">
    <motion.div
      initial="down"
      whileInView="back"
      transition={{ staggerChildren: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-8 sm:px-8 lg:px-36 py-8"
    >
      <motion.div variants={rise}>
        <Card img={reactjs} title="Frontend">
          <>
            Semantic and accessible <Bold>HTML</Bold>.
          </>
          <>
            Modern <Bold>CSS</Bold>: Sass, Tailwind...
          </>
          <>
            Clean and DRY <Bold>ES6+ / TypeScript</Bold>.
          </>
          <>
            <Bold>Build tools</Bold>: Prettier, ESLint, pnpm...
          </>
          <>
            <Bold>React / Next.js</Bold> ecosystem.
          </>
        </Card>
      </motion.div>
      <motion.div variants={rise}>
        <Card img={nestjs} title="Backend">
          <>
            Mainstream <Bold>languages</Bold>: TypeScript, Python, Go...
          </>
          <>
            <Bold>Database</Bold> basics: Postgres, MongoDB, ORM...
          </>
          <>
            <Bold>API design</Bold>: REST, best practices...
          </>
        </Card>
      </motion.div>
      <motion.div variants={rise}>
        <Card img={docker} title="DevOps">
          <>
            Containerize apps with <Bold>Docker (compose)</Bold>.
          </>
          <>
            <Bold>CI / CD</Bold> basics: Git Hooks, GitHub Actions...
          </>
          <>
            <Bold>Cloud VPS</Bold> and hosting platforms.
          </>
          <>
            <Bold>Networking</Bold>: HTTP(S), SSH, Port forwarding...
          </>
        </Card>
      </motion.div>
      <motion.div variants={rise}>
        <Card img={arch} title="Others">
          <>
            <Bold>Linux</Bold> user: Arch, Ubuntu, Deepin...
          </>
          <>
            Heavy <Bold>VSCode</Bold> user.
          </>
          <>
            <Bold>Pythonista</Bold>: web spider, data analysis...
          </>
        </Card>
      </motion.div>
    </motion.div>
  </Section>
);
