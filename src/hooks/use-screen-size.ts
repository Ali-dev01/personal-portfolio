import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [currentScreenSize, setCurrentScreenSize] = useState("");

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  useEffect(() => {
    const updateScreenSize = () => {
      const viewportWidth = window.innerWidth;
      let newScreenSize = "";

      if (viewportWidth < breakpoints.sm) {
        newScreenSize = "sm";
      } else if (viewportWidth < breakpoints.md) {
        newScreenSize = "md";
      } else if (viewportWidth < breakpoints.lg) {
        newScreenSize = "lg";
      } else {
        newScreenSize = "xl";
      }

      // Update currentScreenSize only if it has changed
      if (currentScreenSize !== newScreenSize) {
        setCurrentScreenSize(newScreenSize);
      }
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [currentScreenSize, breakpoints]);

  return { currentScreenSize };
};

export default useScreenSize;
