import { GiGraduateCap } from "react-icons/gi";
import career from "../assets/Career-Pathways.jfif";

const educationData = [
  {
    time: "2025-Present",
    degree: "Bachelor of Science in Computer Science And Engineering",
    institution: "International Islamic University Chittagong",
  },
  {
    time: "2021-2023",
    degree: "Higher Secondary School Certificate",
    institution: "Govt Hazi Muhammad Mohsin College",
  },
  {
    time: "2018-2020",
    degree: "Secondary School Certificate",
    institution: "Collegiate School, Chattogram",
  },
];

const Education = () => (
  <div className="bg-slate-900 min-h-screen p-10 md:p-20 pb-0 ">
    <h1 className="text-4xl md:text-5xl font-bold text-center">
      Educational Background
    </h1>
    <div className="flex flex-col md:flex-row justify-center items-center mt-10">
      <div className="md:w-1/2">
        <img
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
          src={career}
          alt="Career Pathways"
        />
      </div>
      <div className="md:w-1/2">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {educationData.map((edu, index) => (
            <li key={index} className="flex items-start">
              <div className="timeline-middle bg-base-300 rounded-full ml-0">
                <GiGraduateCap className="text-4xl p-1 text-slate-900" />
              </div>
              <div className="timeline-end mb-10 ml-4">
                <time className="font-mono italic">{edu.time}</time>
                <div className="bg-base-300 p-3 rounded-3xl text-slate-900 mt-2">
                  <h1 className="text-lg font-bold">{edu.degree}</h1>
                  <p>{edu.institution}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Education;
