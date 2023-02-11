import mrThanlon from "assets/mr-thanlon.webp";
import qyInvoLing from "assets/qy-invo-ling.webp";
import sake from "assets/sake.webp";
import sumijie from "assets/sumijie.webp";
import yaoSsg from "assets/yao-ssg.webp";

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
  {
    title: "sumijie",
    description: "Java developer. Minecraft mod creator. ACMer.",
    url: "https://focess.top",
    image: sumijie,
  },
  {
    title: "QyInvoLing",
    description: "Silly web developer. Modest self-describer.",
    url: "https://qyinvoling.tech",
    image: qyInvoLing,
  },
  {
    title: "MrThanlon",
    description: "Sell code for living. Impl Bug for Code.",
    url: "https://blog.ch34k.xyz",
    image: mrThanlon,
  },
  {
    title: "Yaossg",
    description: "C++ programmer. Hardcore Minecraft player.",
    url: "https://yaossg.com",
    image: yaoSsg,
  },
];
