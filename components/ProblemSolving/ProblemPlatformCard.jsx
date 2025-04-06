import React from "react";
import CardLayout from "../Common/CardLayout";
import Image from "next/image";

const ProblemPlatformCard = ({ image, name }) => {
  return (
    <CardLayout>
      <div className="card_stylings transition px-5 py-5">
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={name}
          className="w-full opacity-80 object-cover rounded-md"
        />
      </div>
    </CardLayout>
  );
};

export default ProblemPlatformCard;
