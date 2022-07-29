import { m } from "framer-motion";
import { type IProfile } from "src/models/profile.model";
import { ProfileCard } from "./profile-card";

interface IProps {
  profile: IProfile;
}

export const Profile = ({ profile: { count, forks, stars } }: IProps) => (
  <m.ul
    initial="hide"
    whileInView="show"
    transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
    className="flex justify-around"
  >
    <ProfileCard topic="count">{count}</ProfileCard>
    <ProfileCard topic="stars">{stars}</ProfileCard>
    <ProfileCard topic="forks">{forks}</ProfileCard>
  </m.ul>
);
