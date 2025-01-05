import axios from "axios";
import { useEffect, useState } from "react";
import ParallaxCard from "./ParallaxCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchAllProjects = () => {
    axios
      .get("/project.json")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  return (
    <div className="w-11/12 mx-auto bg-slate-800 mt-20">
      <h1 className="text-5xl font-bold text-center py-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        {projects.map((project) => (
          <ParallaxCard key={project.id} project={project}></ParallaxCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
