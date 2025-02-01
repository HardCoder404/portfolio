import React from "react";
import { COURSE_WORK } from "../../../constants/constants";

const CourseWork = () => {
  return (
    <div className="flex flex-col space-y-2 pt-6">
      <div className="flex flex-col">
        <span className="text-Snow text-xs font-bold">Course Work</span>
        <span className="text-xs text-gray-600 flex flex-wrap gap-2 mt-3">
          {COURSE_WORK.map((course, index) => (
            <span
              key={index}
              className="bg-gray-00 text-white borde rounded-full px-3 py-2 hover:text-Snow"
              style={{ backgroundColor: "rgb(26, 26, 26)" }}
            >
              {course}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default CourseWork;
