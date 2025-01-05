import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import profileImg from "../../assets/iar-img.png";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="py-10">
      <div className="w-11/12 mx-auto bg-slate-800">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:p-20">
          <div className="md:w-1/2 w-full p-5">
            <div className="space-y-3">
              <h1 className="text-2xl font-medium">Hi, I’m</h1>
              <h1 className="uppercase text-4xl md:text-5xl font-bold">
                Istiaq Ahsan Romi
              </h1>
              <h3 className="text-3xl font-semibold">Frontened Developer</h3>
              <div className="pt-5">
                <Link
                  to="https://docs.google.com/document/d/1Sux1_kZkNI7qzKzDog0qiZCkeL_uviTabBoo4M9hWa0/edit?usp=sharing"
                  className="btn"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div
              className=" bg-slate-900 py-10 rounded-full m-2 md:m-0 
          rounded-tr-none rounded-br-none shadow-2xl"
            >
              <div className="flex justify-between gap-5">
                <div className="bg-slate-900 ml-8 md:ml-12 rounded-full">
                  <img
                    className="rounded-full p-2 md:w-[350px] w-full"
                    src={profileImg}
                    alt=""
                  />
                </div>
                <div className="text-4xl flex flex-col justify-evenly mr-5 md:mr-10 text-white">
                  <Link to="https://github.com/istiaq-ahsan">
                    <FaSquareGithub />
                  </Link>
                  <Link to="https://www.linkedin.com/in/istiaq-ahsan">
                    <FaLinkedin />
                  </Link>
                  <Link to="https://www.facebook.com/profile.php?id=100095084532947">
                    <FaFacebookSquare />
                  </Link>
                  <Link to="https://wa.me/01575306824">
                    <FaWhatsappSquare />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
