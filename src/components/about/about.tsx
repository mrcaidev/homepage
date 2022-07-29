import { type IProfile } from "src/models/profile.model";
import { Section } from "../common/section";
import { Divider } from "./divider";
import { Profile } from "./profile";
import { SelfIntro } from "./self-intro";
import { SidePicture } from "./side-picture";

interface IProps {
  profile: IProfile;
}

export const About = ({ profile }: IProps) => (
  <Section id="about">
    <div className="flex justify-center gap-x-20">
      <SidePicture />
      <div className="flex flex-col justify-around max-w-lg">
        <SelfIntro />
        <Divider />
        <Profile profile={profile} />
      </div>
    </div>
  </Section>
);
