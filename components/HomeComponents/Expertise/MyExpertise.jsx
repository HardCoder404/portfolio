import ExpertiseCard from "./ExpertiseCard";
import { ExpertiseData } from "../../../constants/experties";

const MyExpertise = () => {
  return (
    <>
      <div className="px-4 md:px-8 py-4 text-lg mt-2 font-bold text-Snow">
        My Expertise
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-4 md:px-8 ">
        {ExpertiseData.map((data, key) => (
          <ExpertiseCard key={key} data={data} />
        ))}
      </div>
    </>
  );
};

export default MyExpertise;
