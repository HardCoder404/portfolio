import ReviewCard from "./ReviewCard";
import { ReviewsData } from "../../../constants/review";

const ClientReviews = () => {
  return (
    <>
      <div className="px-4 md:px-8 py-4 text-lg font-bold text-Snow">
        Clients Reviews
      </div>
      <div className="overflow-x-auto w-full grid  justify-items-center grid-flow-col gap-4 px-4 md:px-8 pb-4">
        {ReviewsData?.map((data, key) => (
          <ReviewCard key={key} data={data} />
        ))}
      </div>
    </>
  );
};

export default ClientReviews;
