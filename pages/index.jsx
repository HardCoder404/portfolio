import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews";
const home = () => {
  return (
    <div className="Home-Page h-full flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-auto no-scrollbar">
        <Banner />
        <MyExpertise />
        <Recommendations />
        <ClientReviews />
      </div>
      {/* Fixed footer */}
      <Footer />
    </div>
  );
};

export default home;
