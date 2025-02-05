import Link from 'next/link';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Contact from './Contact';
import Download from './Download';
import Languages from './Languages';
import Tools from './Tools';
import Skills from './Skills';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../../../constants/constants';
import Prince from '../../../public/images/prince2.jpg';
import CourseWork from './CourseWork';
import { ShieldCheck } from 'lucide-react';

const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <Link href={"/"}>
        <div className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
          {/* Background image */}
          <div
            className="absolute inset-0 h-16 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://assets.leetcode.com/users/images/f40d4ba0-2186-409c-9f57-64041660abe0_1709203232.4343975.png)`,
            }}
          ></div>

          {/* Profile image */}
          <Image
            className="relative w-20 h-20 object-cover rounded-full z-10"
            src={Prince}
            alt="profile picture"
          />

          <div className="flex flex-col items-center justify-center z-10">
            <span className="text-gray-300 text-base font-bold break-normal">
              {NAME}
              <ShieldCheck className="inline-block mb-1 text-gray-500 ml-1" size={18} />
            </span>
            <span className="text-sm text-LightGray text-center mt-2">
              {DESIGNATION}
            </span>
          </div>
        </div>
      </Link>

      {/* middle components */}
      <div className="beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
        <Contact />
        <Languages />
        <Skills />
        <Tools />
        <CourseWork />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaGithub />
        </Link>
        <Link
          href={SOCIAL_LINKS.TWITTER}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaTwitter />
        </Link>
        <Link
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Intro;
