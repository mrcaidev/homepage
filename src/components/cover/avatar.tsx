import Image from "next/future/image";
import miku from "public/miku.webp";

export const Avatar = () => (
  <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72">
    <Image
      src={miku}
      alt="Miku"
      priority
      placeholder="blur"
      className="rounded-3xl"
    />
  </div>
);
