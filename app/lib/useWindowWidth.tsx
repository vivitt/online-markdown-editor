/**
 *  useWindowWidth
 *  This hook returns the viewport/window width
 */

import { useEffect, useState } from "react";

type WindowDimentions = {
  width: number | undefined;
};

const useWindowWidth = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowWidth;
