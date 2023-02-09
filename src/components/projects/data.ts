import cue from "assets/cue.webp";
import designPatterns from "assets/design-patterns.webp";
import hooks from "assets/hooks.webp";
import kgqa from "assets/kgqa.webp";
import paste from "assets/paste.webp";
import tailwindcssRadixColors from "assets/tailwindcss-radix-colors.webp";

export const projects = [
  {
    title: "hooks",
    description: "A collection of React utility hooks.",
    href: "https://hooks.mrcai.dev",
    image: hooks,
  },
  {
    title: "tailwindcss-radix-colors",
    description: "Bring Radix UI's color system to Tailwind CSS.",
    href: "https://github.com/mrcaidev/tailwindcss-radix-colors",
    image: tailwindcssRadixColors,
  },
  {
    title: "cue",
    description: "Minimal MVVM framework.",
    href: "https://github.com/mrcaidev/cue/wiki",
    image: cue,
  },
  {
    title: "paste",
    description: "Simple markdown pastebin.",
    href: "https://paste.mrcai.dev",
    image: paste,
  },
  {
    title: "kqga",
    description: "Movie QA system based on knowledge graph.",
    href: "https://kgqa.mrcai.dev",
    image: kgqa,
  },
  {
    title: "design patterns",
    description: "Design patterns in both FP and OOP.",
    href: "https://github.com/mrcaidev/design-patterns",
    image: designPatterns,
  },
];
