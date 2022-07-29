import { useRouter } from "next/router";

export const useLocale = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const toggle = () => {
    const nextLocale = locale === "en-US" ? "zh-CN" : "en-US";
    router.push({ pathname, query }, asPath, {
      locale: nextLocale,
      scroll: false,
    });
    document.cookie = "NEXT_LOCALE=" + nextLocale;
  };

  return { locale, toggle };
};

export const useLocaleValue = <T>(en: T, zh: T) => {
  const { locale } = useLocale();

  return locale === "en-US" ? en : zh;
};
