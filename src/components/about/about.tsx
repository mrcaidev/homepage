import { Section } from "../common/section";
import { Article } from "./article";
import { Divider } from "./divider";
import { SidePicture } from "./side-picture";
import { Statistics } from "./statistics";

export const About = () => (
  <Section id="about">
    <div className="flex justify-center gap-x-20">
      <SidePicture />
      <div className="flex flex-col justify-around max-w-lg">
        <Article />
        <Divider />
        <Statistics />
      </div>
    </div>
  </Section>
);
