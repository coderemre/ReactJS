import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const reportWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window != "undefined") {
      reportWindowSize();
      window.addEventListener("resize", reportWindowSize);
    }

    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);

  return windowSize;
};
