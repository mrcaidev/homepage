import { useRouter } from "next/router";
import { setCookie } from "src/utils/cookies";

const COOKIE_KEY = "NEXT_LOCALE";

/**
 * Use current locale.
 *
 * @returns Current locale, and a function to toggle it.
 */
export function useLocale() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  // Navigate to subpath of locale, and set cookie.
  const toggle = () => {
    const nextLocale = locale === "en-US" ? "zh-CN" : "en-US";
    router.push({ pathname, query }, asPath, { locale: nextLocale });
    setCookie(COOKIE_KEY, nextLocale);
  };

  return { locale, toggle };
}

/**
 * Use appropriate value for current locale.
 *
 * @param en Value for locale "en-US".
 * @param zh Value for locale "zh-CN".
 * @returns Value for current locale.
 */
export function useLocaleValue<T>(en: T, zh: T) {
  const { locale } = useLocale();
  return locale === "en-US" ? en : zh;
}
