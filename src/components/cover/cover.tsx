import { Avatar } from "./avatar";
import { DownloadCV } from "./download-cv";
import { ScrollDown } from "./scroll-down";
import { Subtitle } from "./subtitle";
import { Title } from "./title";

export const Cover = () => (
  <section className="flex h-screen px-10">
    <div className="flex justify-center items-center gap-20 flex-wrap-reverse m-auto">
      <div>
        <Title />
        <Subtitle />
        <DownloadCV />
      </div>
      <Avatar />
    </div>
    <ScrollDown />
  </section>
);
