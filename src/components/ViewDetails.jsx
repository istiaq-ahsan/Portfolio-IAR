import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const singleData = useLoaderData();
  const { title, image, description, liveLink, repository } = singleData;
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Left: Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={image}
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
              alt="Box Office News"
            />
          </div>

          {/* Right: Info Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-center">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <div className="card-actions justify-center">
              <Link to={liveLink} className="btn btn-accent">
                Live Preview
              </Link>

              <Link to={repository} className="btn btn-neutral">
                Github Repository
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
