import Marquee from "react-fast-marquee";

const Skill = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center">
      <div className="w-11/12 mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white">My Skills</h1>
        </div>

        {/* Marquee Section */}
        <Marquee pauseOnHover>
          <div className="flex space-x-10 md:space-x-16 mt-10">
            {/* Skill 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                alt="HTML"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h2 className="mt-4 text-lg text-white font-semibold">HTML</h2>
            </div>
            {/* Skill 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000"
                alt="CSS"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h2 className="mt-4 text-lg text-white font-semibold">CSS</h2>
            </div>
            {/* Skill 3 */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                alt="Tailwind CSS"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h2 className="mt-4 text-lg text-white font-semibold">
                Tailwind CSS
              </h2>
            </div>
            {/* Skill 4 */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                alt="JavaScript"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h2 className="mt-4 text-lg text-white font-semibold">
                JavaScript
              </h2>
            </div>
            {/* Skill 5 */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000"
                alt="React"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h2 className="mt-4 text-lg text-white font-semibold">React</h2>
            </div>
            {/* Skill 6 */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
                alt="Firebase"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h2 className="mt-4 text-lg text-white font-semibold">
                Firebase
              </h2>
            </div>
            {/* Skill 7 */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                alt="MongoDB"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h2 className="mt-4 text-lg text-white font-semibold">MongoDB</h2>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;
