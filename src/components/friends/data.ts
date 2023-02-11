import sake from "assets/sake.webp";

export type Friend = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export const friends: Friend[] = [
  {
    title: "Sake",
    description: "Pythonist. Machine learning. Computer vision.",
    url: "https://fullstack-sake.github.io",
    image: sake,
  },
];
