import React, { useEffect, useRef, useState } from "react";

const ProgressCircle = () => {
  const progressWrapRef = useRef(null);
  const progressPathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const progressPath = progressPathRef.current;
    const length = progressPath.getTotalLength();
    setPathLength(length);

    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = length + " " + length;
    progressPath.style.strokeDashoffset = length;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = length - (scroll * length) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, [pathLength]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        progressWrapRef.current.classList.add("active-progress");
      } else {
        progressWrapRef.current.classList.remove("active-progress");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="progress-wrap cursor-pointer"
      ref={progressWrapRef}
      onClick={handleClick}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          ref={progressPathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
