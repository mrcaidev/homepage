import designPatterns from "./logos/design-patterns.svg";
import hooks from "./logos/hooks.svg";
import intelligentLogistics from "./logos/intelligent-logistics.svg";
import iwallpaper from "./logos/iwallpaper.svg";
import kgqa from "./logos/kgqa.svg";
import oauth from "./logos/oauth.svg";
import tailwindcssRadixColors from "./logos/tailwindcss-radix-colors.svg";
import uestc from "./logos/uestc.svg";

export const projects = [
  {
    name: "UESTC",
    description:
      "Codebase index of every single project I've built for my undergraduate courses at UESTC.",
    logo: uestc,
    sourceUrl: "https://github.com/mrcaidev/uestc",
    liveUrl: null,
  },
  {
    name: "@mrcaidev/hooks",
    description:
      "A collection of React utility hooks. Sensible defaults, tree-shakable, fully typed and SSR-ready.",
    logo: hooks,
    sourceUrl: "https://github.com/mrcaidev/hooks",
    liveUrl: "https://hooks.mrcai.dev",
  },
  {
    name: "Tailwind CSS Radix Colors",
    description:
      "Bring Radix UI's color system to Tailwind CSS, with opt-in smart semantic classes.",
    logo: tailwindcssRadixColors,
    sourceUrl: "https://github.com/mrcaidev/tailwindcss-radix-colors",
    liveUrl: null,
  },
  {
    name: "Intelligent Logistics",
    description:
      "Visualized intelligent logistics management system. Handcrafted JSON database!",
    logo: intelligentLogistics,
    sourceUrl: "https://github.com/mrcaidev/intelligent-logistics",
    liveUrl: "https://intelligent-logistics.mrcai.dev",
  },
  {
    name: "iWallpaper",
    description:
      "Wallpaper exploring platform, with AI-powered recommender system and search engine.",
    logo: iwallpaper,
    sourceUrl: "https://github.com/mrcaidev/iwallpaper",
    liveUrl: "https://iwallpaper.mrcai.dev",
  },
  {
    name: "KGQA",
    description:
      "Question answering chatbot about Chinese movies, based on knowledge graph.",
    logo: kgqa,
    sourceUrl: "https://github.com/mrcaidev/kgqa",
    liveUrl: null,
  },
  {
    name: "OAuth 2.1 zh-Hans",
    description:
      "Simplified Chinese translation of RFC Specification: OAuth 2.1 Authorization Framework.",
    logo: oauth,
    sourceUrl: "https://github.com/mrcaidev/oauth-2.1-zh-hans",
    liveUrl: "https://oauth21.mrcai.dev",
  },
  {
    name: "Design Patterns",
    description:
      "23 common design patterns written in Typescript, with a focus on comparing FP and OOP.",
    logo: designPatterns,
    sourceUrl: "https://github.com/mrcaidev/design-patterns",
    liveUrl: null,
  },
];
