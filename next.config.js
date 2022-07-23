/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "zh-CN"],
    defaultLocale: "en-US",
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
