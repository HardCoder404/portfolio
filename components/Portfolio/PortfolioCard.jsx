import Image from "next/image";
import TechStackUsed from "../Common/TechStackUsed"
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { Tooltip } from "antd";

const PortfolioCard = ({ data }) => {
    return (
      <div className="relative card_stylings overflow-hidden h-full">
        <Image
          src={data?.image}
          width={1920}
          height={1080}
          alt="portfolio img"
          className="w-full object-cover opacity-30 h-32 sm:h-48 md:h-64"
        />
        <div
          id="arrow"
          className="py-2 h-ful pb-5 px-6 card_stylings hover:-translate-y-10 transition-all ease-in-out duration-500"
        >
          <div className="flex justify-between p-0 m-0 ">
            <h3 className="mr-2 underline italic flex font-semibold pt-2 text-2xl text-Snow leading-tight sm:leading-normal">
              <a
                href={data?.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center"
              >
                {data?.projectName}
                <div>
                  <SquareArrowOutUpRight className="ml-2 text-green-400" size={21} />
                </div>
              </a>
            </h3>
          </div>
          <p className="text-xs text-LightGray font-normal">
            {data?.projectDetail}
          </p>
          <div className="text-sm flex flex-wrap gap-3 py-2">
            {data.technologiesUsed.map((index, key) => (
              <TechStackUsed key={key} title={index.tech} />
            ))}
          </div>
        </div>

        <Tooltip title="Source Code" placement="top">
          <a
            href={data?.sourceCode}
            target="_blank"
            rel="noreferrer"
            className="absolute top-3 right-3 bg-white rounded-full flex items-center p-0.5"
          >
            <div className="rounded-full">
              <Image
                src="/images/github.png"
                alt="github"
                height={24}
                width={24}
                className="object-cover p-0.5"
              />
            </div>
          </a>
        </Tooltip>
      </div>
    );
}

export default PortfolioCard