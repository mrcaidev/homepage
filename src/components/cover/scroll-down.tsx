import { useEffect, useState } from "react";
import { FiArrowDown } from "react-icons/fi";

export const ScrollDown = () => {
  const handleClick = () => scrollBy(0, window.innerHeight);

  const [shouldShow, setShouldShow] = useState(true);
  const handleScroll = () => {
    setShouldShow(window.scrollY < 100);
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  });

  return (
    shouldShow && (
      <div className="fixed left-0 right-0 bottom-4 text-center">
        <button
          onClick={handleClick}
          className="p-2 rounded-full ring-2 bg-slate-100 dark:bg-slate-900 animate-bounce transition-colors"
        >
          <FiArrowDown size="28px" />
        </button>
      </div>
    )
  );
};
