import { useEffect, useState } from "react";

export const useScrollPos = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const reportScroll = () => {
      setScrollPos(window.scrollY);
    };

    if (typeof window != "undefined") {
      reportScroll();
      window.addEventListener("scroll", reportScroll);
    }

    return () => {
      window.removeEventListener("scroll", reportScroll);
    };
  }, []);

  return scrollPos;
};
