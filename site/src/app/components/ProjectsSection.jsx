"use client";
import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "COMP4461 Project 2: Typhoon Disaster Management Chatbot",
    description: "A disaster management chatbot designed to help students cook safely and conveniently during typhoons",
    image: "./images/projects/Typhood.png",
    tag: ["All"],
    gitUrl: "/project2",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "COMP4461 Project 1: Aquatic kingdom of Atlantis",
    description: "Make the campus more friendly for visiting students from the aquatic kingdom of Atlantis",
    image: "./images/projects/Atlantis.jpg",
    tag: ["All"],
    gitUrl: "/project1",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Bachelor thesis: MinCykel",
    description: " A secure way to transfer ownership of bikes",
    image: "./images/projects/P6_V2.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mihusu/myBike_backend",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Educado",
    description: "An educational learning platform for waste pickers in Brazil",
    image: "./images/projects/P5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Educado-App",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "Board game language",
    description: "Learning project to create compilers",
    image: "./images/projects/P4_V2.jpg",
    tag: ["All", "Terminal"],
    gitUrl: "https://github.com/Team-Skarp/BoardGameLanguage",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "Priotool",
    description: "An inventory & repair management system for GreenMind (former Blue City)",
    image: "./images/projects/P3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mihusu/P3-backend",
    previewUrl: "/"
  },
  {
    id: 7,
    title: "Sustainify",
    description: "Lowering household CO2 emissions from energy consumption through an advice driven through a web application",
    image: "./images/projects/P2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Team-Skarp/Project-skarp",
    previewUrl: "/"
  },
  {
    id: 8,
    title: "CV-filter",
    description: "Selecting particular words to be filtered out from a CV",
    image: "./images/projects/P1.png",
    tag: ["All", "Terminal"],
    gitUrl: "https://github.com/Mihusu/AAU_P1",
    previewUrl: "/"
  },
]

const projectContents = {
  1: <Project2Content />,
  2: <Project1Content />,
}

function Project1Content() {
  return (
    <section className="text-white min-h-screen p-8 space-y-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-teal-200 mb-4">7. Reflection</h2>
        <p className="leading-relaxed mb-4">
          Working on this project provided a creative yet structured opportunity to apply
          human-centered design thinking to an imaginative but instructive context — designing
          for mermaid students from Atlantis. The process highlighted how empathy and contextual
          awareness drive meaningful innovation, even in fantastical scenarios.
        </p>

        <h3 className="text-xl font-semibold text-teal-100 mt-6 mb-2">Understanding the Users</h3>
        <p className="leading-relaxed mb-4">
          The most eye-opening stage was needfinding. Translating mermaids’ physiological and
          cultural traits into tangible design implications demonstrated how critical it is to
          think beyond conventional human assumptions. For instance, realizing that stairs or
          paper could become major accessibility barriers reframed what inclusivity means in
          environmental and product design.
        </p>

        <h3 className="text-xl font-semibold text-teal-100 mt-6 mb-2">
          Balancing Imagination and Feasibility
        </h3>
        <p className="leading-relaxed mb-4">
          While the project encouraged creativity, it also challenged me to maintain logical
          consistency. Designing water tunnels, hydration domes, and hybrid classrooms required
          envisioning plausible integrations with existing HKUST infrastructure. I learned that
          even imaginative concepts must respect spatial, technological, and social constraints
          to remain credible and effective.
        </p>

        <h3 className="text-xl font-semibold text-teal-100 mt-6 mb-2">
          Human-Centered Design Insights
        </h3>
        <p className="leading-relaxed mb-4">
          The ideation process emphasized empathy mapping, iterative brainstorming, and balancing
          diverse needs — both mermaid and human students. This deepened my appreciation for
          co-design and universal design principles.
        </p>

        <h3 className="text-xl font-semibold text-teal-100 mt-6 mb-2">
          Collaboration and Reflection on Process
        </h3>
        <p className="leading-relaxed mb-4">
          Through discussions and peer feedback, I recognized the importance of communicating
          ideas clearly through visuals and storytelling. The “mind map” stage helped consolidate
          complex ideas into a coherent system.
        </p>

        <h3 className="text-xl font-semibold text-teal-100 mt-6 mb-2">Key Takeaways</h3>
        <p className="leading-relaxed">
          This project illustrated that good design begins with empathy and curiosity. Even in a
          whimsical scenario, the design thinking framework — empathize, define, ideate, prototype,
          and test — remains universally applicable.
        </p>
      </div>
    </section>
  );
}

function Project2Content() {
  return (
    <section className="text-white min-h-screen p-8 space-y-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-teal-200 mb-4">7. Reflection</h2>
        <p className="leading-relaxed text-gray-200">
          This project reinforced how crucial empathy is when designing for real-world problems.
          By understanding the challenges HKUST students face during typhoons — limited food,
          closed canteens, and scarce cooking tools — we learned that good design begins with
          genuine user needs, not technological novelty. Observing and interviewing users revealed
          that many students felt anxious and unprepared, which shaped our goal of creating a
          chatbot that reduces stress and empowers self-sufficiency.
        </p>

        <h3 className="text-xl font-semibold text-teal-100 mt-6 mb-2">
          Balancing Simplicity and Functionality
        </h3>
        <p className="leading-relaxed text-gray-200">
          Throughout the ideation and prototyping phases, we learned that more features do not
          always mean a better experience. Our early prototypes overwhelmed users with excessive
          preference settings and options. Through testing and iteration, we simplified the
          interface, focusing on intuitive conversation and quick recipe suggestions. This process
          showed that usability improves dramatically when unnecessary complexity is removed.
        </p>

        <h3 className="text-xl font-semibold text-teal-100 mt-6 mb-2">
          The Power of Iteration and Feedback
        </h3>
        <p className="leading-relaxed text-gray-200">
          User testing transformed Typhood from a concept into a practical tool. Feedback helped us
          recognize that clarity and natural interaction were more valuable than advanced
          configurations. Adding speech input and simplifying setup steps directly addressed user
          pain points and increased satisfaction. Each cycle of iteration strengthened our
          understanding of how testing reveals hidden usability issues that even designers might
          overlook.
        </p>
      </div>
    </section>
  );
}

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
        {filteredProjects.map((project, index) => {
          const content = projectContents[project.id];
          const enablePreviewModal = Boolean(content);

          return (
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
                previewUrl={project.previewUrl}
                {...(enablePreviewModal
                  ? { enablePreviewModal: true, previewContent: content }
                  : {})}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
