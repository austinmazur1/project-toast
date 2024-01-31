
import React from "react";


const useEscapeKey = (setToasts) => {
  return React.useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key === "Escape") {
        setToasts([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useEscapeKey;
