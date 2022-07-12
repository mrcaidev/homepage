import { useEffect, useState } from "react";

/**
 * Use whether a media query condition is matched.
 *
 * @param query Media query expression.
 * @returns `true` if condition is matched, or `false` otherwise.
 */
export function useMediaQuery(query: string) {
  const [isMatched, setIsMatched] = useState(false);

  // Once the code lands on client side,
  // execute media query and add listeners.
  useEffect(() => {
    const target = matchMedia(query);
    setIsMatched(target.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMatched(e.matches);
    target.addEventListener("change", handleChange);
    return () => target.removeEventListener("change", handleChange);
  }, [query]);

  return isMatched;
}
