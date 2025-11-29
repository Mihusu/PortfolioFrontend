"use client";
import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
  
const projectsData = [
  {
    id: 1,
    title: "COMP4461 Project 3: EduGlobe",
    description: "Explore Campuses Around the Globe with EduGlobe - Your Ultimate Campus Guide with VR",
    image: "./images/projects/EduGlobe.png",
    tag: ["All"],
    gitUrl: "./projects/1",
  },
  {
    id: 2,
    title: "COMP4461 Project 2: Typhoon Disaster Management Chatbot",
    description: "A disaster management chatbot designed to help students cook safely and conveniently during typhoons",
    image: "./images/projects/Typhood.png",
    tag: ["All"],
    gitUrl: "./projects/2",
  },
  {
    id: 3,
    title: "COMP4461 Project 1: Aquatic kingdom of Atlantis",
    description: "Make the campus more friendly for visiting students from the aquatic kingdom of Atlantis",
    image: "./images/projects/Atlantis.jpg",
    tag: ["All"],
    gitUrl: "./projects/3",
  },
  {
    id: 4,
    title: "Bachelor thesis: MinCykel",
    description: " A secure way to transfer ownership of bikes",
    image: "./images/projects/P6_V2.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mihusu/myBike_backend",
  },
  {
    id: 5,
    title: "Educado",
    description: "An educational learning platform for waste pickers in Brazil",
    image: "./images/projects/P5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Educado-App",
  },
  {
    id: 6,
    title: "Board game language",
    description: "Learning project to create compilers",
    image: "./images/projects/P4_V2.jpg",
    tag: ["All", "Terminal"],
    gitUrl: "https://github.com/Team-Skarp/BoardGameLanguage",
  },
  {
    id: 7,
    title: "Priotool",
    description: "An inventory & repair management system for GreenMind (former Blue City)",
    image: "./images/projects/P3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mihusu/P3-backend",
  },
  {
    id: 8,
    title: "Sustainify",
    description: "Lowering household CO2 emissions from energy consumption through an advice driven through a web application",
    image: "./images/projects/P2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Team-Skarp/Project-skarp",
  },
  {
    id: 9,
    title: "CV-filter",
    description: "Selecting particular words to be filtered out from a CV",
    image: "./images/projects/P1.png",
    tag: ["All", "Terminal"],
    gitUrl: "https://github.com/Mihusu/AAU_P1",
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 576 : false
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">My Projects</h2>

      <div className={`text-white flex flex-row justify-center items-center gap-4 py-6 ${isMobile ? "flex-wrap" : ""}`}>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        <ProjectTag onClick={handleTagChange} name="Terminal" isSelected={tag === "Terminal"} />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              projectHref={`/projects/${project.id}`}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
