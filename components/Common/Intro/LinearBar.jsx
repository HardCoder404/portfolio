import React, { useState, useEffect } from "react";

const LinearBar = ({ title, percent, bgColor }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = parseInt(percent, 10);
    let currentProgress = 0;

    const timer = setInterval(() => {
      if (currentProgress < target) {
        currentProgress += 1;
        setProgress(currentProgress);
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xs text-gray-400">{title}</span>
        <span className="text-xs text-gray-400">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div
          className={`${bgColor} h-2 rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LinearBar;
