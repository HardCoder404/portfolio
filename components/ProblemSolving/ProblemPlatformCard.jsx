import React from "react";
import CardLayout from "../Common/CardLayout";

const ProblemPlatformCard = ({ image, name }) => {
  return (
    <CardLayout>
      <div className="card_stylings transition px-5 py-5">
        <img
          src={image}
          alt={name}
          className="w-full opacity-80 object-cover rounded-md"
        />
      </div>
    </CardLayout>
  );
};

export default ProblemPlatformCard;
