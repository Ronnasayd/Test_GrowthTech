import { useEffect } from "react";

export const useDocumentReady = (callback) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.readyState === "complete") {
        callback();
        clearInterval(interval);
      }
    }, 100);
  }, [callback]);
};
