import aboutImg from "../assets/iar-2nd-img.jpeg";

const About = () => {
  return (
    <div className="py-10 bg-slate-800 min-h-screen flex items-center">
      <div className="w-11/12 mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white">About Me</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-16">
          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-[300px] md:w-[350px] rounded-full shadow-xl"
              src={aboutImg}
              alt="About Me"
            />
          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 text-white space-y-6">
            <p className="leading-relaxed text-lg">
              <span className="text-xl font-semibold">I’m Istiaq Ahsan,</span> a
              passionate Web Developer specializing in frontend development. My
              journey into web development began last year, but my passion for
              coding dates back to my HSC days. Even before formally diving into
              web development, I had foundational knowledge in HTML, C, and
              basic JavaScript.
            </p>
            <p className="leading-relaxed text-lg">
              <span className="text-xl font-semibold">As I progressed,</span> I
              discovered my love for creating dynamic, responsive user
              interfaces and solving complex problems through code. Soon, I plan
              to start learning Data Structures and Algorithms (DSA) to sharpen
              my problem-solving skills and aim to become a competitive
              programmer. With countless dreams and a clear vision for the
              future, I am committed to continuous growth and building impactful
              digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
