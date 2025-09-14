import { LanguagesData } from "../../../constants/constants";

const Languages = () => {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">
          Programming Languages
        </span>
        {/* Scrollable Wrapper with Animation */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-scroll">
            {/* First batch */}
            {LanguagesData.map((lang, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[90px]"
              >
                <img
                  src={lang.logo}
                  alt={lang.name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xs font-bold text-Snow mt-2">
                  {lang.name}
                </span>
              </div>
            ))}
            {/* Duplicate batch for seamless infinite scroll */}
            {LanguagesData.map((lang, idx) => (
              <div
                key={"dup-" + idx}
                className="flex flex-col items-center min-w-[90px]"
              >
                <img
                  src={lang.logo}
                  alt={lang.name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xs font-bold text-Snow mt-2">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
