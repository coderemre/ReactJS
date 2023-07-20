import { useEffect, useState } from "react";

export const useWindowLoad = () => {
  const [isLoad, setIsload] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("load", () => {
        setIsload(true);
      });
    }

    return () => {
      window.removeEventListener("load", () => {
        setIsload(true);
      });
    };
  }, []);

  return isLoad;
};
