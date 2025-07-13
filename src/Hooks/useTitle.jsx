import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title; // save current title
    document.title = title; // update title

    return () => {
      document.title = previousTitle; // restore on cleanup
    };
  }, [title]); // re-run if title changes
};

export default useTitle;
