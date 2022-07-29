import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    const target = matchMedia(query);
    setIsMatched(target.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsMatched(e.matches);
    target.addEventListener("change", handleChange);

    return () => target.removeEventListener("change", handleChange);
  }, [query]);

  return isMatched;
};
