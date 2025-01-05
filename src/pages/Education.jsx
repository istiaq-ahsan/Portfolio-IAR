import { GiGraduateCap } from "react-icons/gi";
import career from "../assets/Career-Pathways.jfif";

const Education = () => (
  <div className="bg-slate-900 min-h-screen p-10 md:p-20 pb-0 ">
    <h1 className="text-4xl md:text-5xl font-bold text-center">
      Educational Background
    </h1>
    <div className="flex flex-col gap-5 md:flex-row justify-center items-center mt-10">
      <div className="md:w-1/2">
        <img
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full"
          src={career}
          alt="Career Pathways"
        />
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

export default Education;
