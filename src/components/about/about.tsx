import Title from "../common/title";
import { Article } from "./article";
import { Divider } from "./divider";
import { SidePicture } from "./side-picture";
import { Statistics } from "./statistics";

export const About = () => (
  <section className="h-screen px-10 py-20">
    <Title id="about" />
    <div className="flex justify-center gap-x-20">
      <SidePicture />
      <div className="flex flex-col justify-around max-w-lg">
        <Article />
        <Divider />
        <Statistics />
      </div>
    </div>
  </section>
);
