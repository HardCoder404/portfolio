import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import { PortfolioData } from "../constants/portfolio";

const Portfolio = () => {
  return (
    <div className="Portfolio-Page h-full flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-auto no-scrollbar">
        <BannerLayout>
          <div className="grid justify-items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-4 my-6 pb-2">
            {PortfolioData?.map((data, key) => (
              <PortfolioCard key={key} data={data} />
            ))}
          </div>
        </BannerLayout>
      </div>

      {/* Fixed footer at bottom */}
      <Footer />
    </div>
  );
};

export default Portfolio;
