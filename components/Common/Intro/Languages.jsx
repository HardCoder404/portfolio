import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [cCplusplus, setCCplusplus] = useState(0);
  const [typescript, setTypescript] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [python, setPython] = useState(0);
  const [sql, setSql] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (cCplusplus < 98) {
        setCCplusplus((prevCount) => prevCount + 1);
      }
      if (typescript < 94) {
        setTypescript((prevCount) => prevCount + 1);
      }
      if (javascript < 98) {
        setJavascript((prevCount) => prevCount + 1);
      }
      if (python < 90) {
        setPython((prevCount) => prevCount + 1);
      }
      if (sql < 84) {
        setSql((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [cCplusplus, typescript, javascript, python, sql]);

  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">
          Programming Languages
        </span>
        {/* Scrollable Wrapper with Animation */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-scroll space-x-3">
            {/* First Batch of Languages */}
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={typescript}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">TypeScript</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={javascript}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">JavaScript</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={sql}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">SQL</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={cCplusplus}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">C/C++</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={python}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">Python</span>
            </div>

            {/* Cloned Batch of Languages */}
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={typescript}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">TypeScript</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={javascript}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">JavaScript</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={sql}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">SQL</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={cCplusplus}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">C/C++</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 min-w-[90px]">
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={python}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
