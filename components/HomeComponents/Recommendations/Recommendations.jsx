import { RecommendationCardData } from "../../../constants/recommendations";
import RecommendationCard from "./RecommendationCard";

const Recommendations = () => {
  return (
    <>
      <div className="w-full">
        <div className="px-4 md:px-8 py-4 text-lg font-bold text-Snow mt-5">
          Recommendations
        </div>
        <div className="grid w-full justify-items-start grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 px-4 md:px-8 pb-8">
          {RecommendationCardData?.map((data, key) => (
            <RecommendationCard key={key} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommendations;
