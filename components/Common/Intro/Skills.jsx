import LinearBar from "./LinearBar";
import { BADGES, SKILLS } from "../../../constants/constants";
const Skills = () => {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold bg-gradient-to-bl">
          All DSA Badges
        </span>
        <div className="flex flex-wrap">
          {BADGES.map((badge, idx) => (
            <img key={idx} src={badge.image} alt="logo" className="w-14 h-14" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
