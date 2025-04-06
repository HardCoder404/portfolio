import React from "react";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { SquareArrowOutUpRight } from "lucide-react";
import ProblemPlatformCard from "../components/ProblemSolving/ProblemPlatformCard";
import Link from "next/link";

const problemPlatforms = [
  {
    name: "LeetCode",
    image: "/images/lc.png",
    link: "https://leetcode.com/u/HardCoder404/",
  },
  {
    name: "GeeksforGeeks",
    image: "/images/gfg.png",
    link: "https://www.geeksforgeeks.org/user/dracula935/",
  },
  {
    name: "Coding Ninjas",
    image: "/images/cn.png",
    link: "https://www.naukri.com/code360/profile/dracula935",
  },
];


const ProblemSolvingSkill = () => {
  return (
    <BannerLayout>
      <div className="px-8 my-6">
        {problemPlatforms.map((platform, index) => (
          <div key={index} className="w-full mb-8">
            {" "}
            <h1 className="text-xl mb-2 text-white italic font-semibold flex items-center">
              {platform.name}
              <Link
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareArrowOutUpRight
                  className="ml-2 cursor-pointer hover:text-gray-300 transition"
                  size={21}
                />
              </Link>
            </h1>
            <ProblemPlatformCard image={platform.image} name={platform.name} />
          </div>
        ))}
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default ProblemSolvingSkill;
