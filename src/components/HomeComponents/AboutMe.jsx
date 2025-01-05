import aboutImg from "../../assets/iar-2nd-img.jpeg";
const AboutMe = () => {
  return (
    <div className="py-10">
      <div className="w-11/12 mx-auto pt-20 bg-slate-800">
        <div>
          <h1 className="text-5xl font-bold text-center">About Me</h1>
        </div>
        <div className="flex flex-col gap-5 md:flex-row justify-center items-center p-8 md:p-16">
          <div className="md:w-1/2">
            <img className="w-[350px] rounded-full" src={aboutImg} alt="" />
          </div>
          <div className="md:w-1/2 space-y-3">
            <p>
              <span className="ml-10 text-xl">I’m Istiaq Ahsan,</span> a
              passionate Web Developer specializing in frontend development. My
              journey into web development began last year, but my passion for
              coding dates back to my HSC days. Even before formally diving into
              web development, I had foundational knowledge in HTML, C, and
              basic JavaScript.
            </p>
            <p>
              <span className="ml-10 text-xl">As I progressed,</span> I
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

export default AboutMe;
