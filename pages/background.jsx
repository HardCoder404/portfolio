import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { BackgroundData } from "../constants/background";

function Background() {
  return (
    <div className="Background-Page h-full flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-auto no-scrollbar">
        <BannerLayout>
          <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
            <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
              <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
                Education
              </div>
              {BackgroundData &&
                BackgroundData[0]?.eduCards?.map((data, key) => (
                  <Edu_Card key={key} data={data} />
                ))}
            </div>
            <div className="order-1 md:order-2">
              <div className="flex flex-col gap-y-4 md:ml-12">
                <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">
                  Experience
                </div>

                {BackgroundData &&
                  BackgroundData[1]?.expCards?.map((data, key) => (
                    <Exp_Card key={key} data={data} />
                  ))}
              </div>
            </div>
          </div>
        </BannerLayout>
      </div>

      {/* Fixed footer at bottom */}
      <Footer />
    </div>
  );
}

export default Background;
