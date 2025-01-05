/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ParallaxCard = ({ project }) => {
  return (
    <div className="card card-compact rounded-none shadow-xl bg-slate-900">
      {/* Card Image Section */}
      <figure className="relative group">
        <img
          src={project.image}
          alt="Shoes"
          className="w-full h-48 object-cover"
        />
        {/* Hover Title */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
          <h2 className="text-white text-xl font-bold">{project.title}</h2>
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <div className="card-actions justify-evenly">
          <Link to={project.liveLink} className="btn btn-accent">
            Live Preview
          </Link>

          <Link to={`/viewDetails/${project.id}`} className="btn btn-neutral">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParallaxCard;
