import { GiGraduateCap } from "react-icons/gi";
import career from "../../assets/Career-Pathways.jfif";
const Education = () => {
  return (
    <div className="bg-slate-800 w-11/12 mx-auto p-10 md:p-20 pb-0 my-20">
      <div className="text-4xl md:text-5xl font-bold text-center mx-auto">
        Educational Background
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div className="md:w-1/2">
          <div className="bg-slate-900 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full">
            <img
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full p-2"
              src={career}
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <div className="absolute ml-4 top-0 w-1 h-full bg-gray-300"></div>
            {/* First Item */}
            <li className="flex items-start">
              <div className="timeline-middle bg-base-300 rounded-full ml-0">
                <GiGraduateCap className="text-4xl p-1 text-slate-900" />
              </div>
              <div className="timeline-end mb-10 ml-4">
                <time className="font-mono italic">2025-Present</time>
                <div className="bg-base-300 p-3 rounded-3xl text-slate-900 mt-2">
                  <h1 className="text-lg font-bold">
                    Bachelor of Science in Computer Science And Engineering
                  </h1>
                  <p>International Islamic University Chittagong</p>
                </div>
              </div>
            </li>

            {/* Second Item */}
            <li className="flex items-start">
              <div className="timeline-middle bg-base-300 rounded-full ml-0">
                <GiGraduateCap className="text-4xl p-1 text-slate-900" />
              </div>
              <div className="timeline-end md:mb-10 ml-4">
                <time className="font-mono italic">2021-2023</time>
                <div className="bg-base-300 p-3 rounded-3xl text-slate-900 mt-2">
                  <h1 className="text-lg font-bold">
                    Higher Secondary School Certificate
                  </h1>
                  <p>Govt Hazi Muhammad Mohsin College</p>
                </div>
              </div>
            </li>

            {/* Third Item */}
            <li className="flex items-start">
              <div className="timeline-middle bg-base-300 rounded-full ml-0">
                <GiGraduateCap className="text-4xl p-1 text-slate-900" />
              </div>
              <div className="timeline-end mb-10 ml-4">
                <time className="font-mono italic">2018-2020</time>
                <div className="bg-base-300 p-3 rounded-3xl text-slate-900 mt-2">
                  <h1 className="text-lg font-bold">
                    Secondary School Certificate
                  </h1>
                  <p>Collegiate School, Chattogram</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
