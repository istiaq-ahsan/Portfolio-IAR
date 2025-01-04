import {
  FaFacebookF,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import profileImg from "../../assets/iar-img.png";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="w-11/12 mx-auto py-20 bg-base-300">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2">
          <div className="space-y-3">
            <h1 className="text-2xl font-medium">Hi, I’m</h1>
            <h1 className="uppercase text-5xl font-bold">Istiaq Ahsan Romi</h1>
            <h3 className="text-3xl font-semibold">Frontened Developer</h3>
          </div>
        </div>
        <div className="md:w-1/2 bg-slate-900 py-10 rounded-full rounded-tr-none rounded-br-none">
          <div className="flex justify-between">
            <div className="bg-slate-900 w-2/4 ml-12 rounded-full">
              <img className="rounded-full p-2" src={profileImg} alt="" />
            </div>
            <div className="text-4xl flex flex-col justify-evenly mr-10 text-white">
              <Link>
                <FaSquareGithub />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaFacebookSquare />
              </Link>
              <Link>
                <FaWhatsappSquare />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
