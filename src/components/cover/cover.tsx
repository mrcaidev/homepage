import { Avatar } from "./avatar";
import { DownloadCV } from "./download-cv";
import { Subtitle } from "./subtitle";
import { Title } from "./title";

export const Cover = () => (
  <section className="flex justify-center items-center min-h-screen px-10 py-20">
    <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap-reverse">
      <div>
        <Title />
        <Subtitle />
        <DownloadCV />
      </div>
      <Avatar />
    </div>
  </section>
);
