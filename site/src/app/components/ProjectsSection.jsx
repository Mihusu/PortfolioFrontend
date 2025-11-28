"use client";
import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    title: "COMP4461 Project 2: Typhoon Disaster Management Chatbot",
    description: "A disaster management chatbot designed to help students cook safely and conveniently during typhoons",
    image: "./images/projects/Typhood.png",
    tag: ["All"],
    gitUrl: "#projects",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "COMP4461 Project 1: Aquatic kingdom of Atlantis",
    description: "Make the campus more friendly for visiting students from the aquatic kingdom of Atlantis",
    image: "./images/projects/Atlantis.jpg",
    tag: ["All"],
    gitUrl: "/#projects",
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
        <h2 className="text-2xl font-semibold text-teal-200 mb-4">Reflection</h2>
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
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-teal-300 mb-6">
          COMP4461 Project 2: Typhood — Diary Reflection
        </h1>

        <p className="text-[#E5E7EB] leading-relaxed">
          This diary reflection have my personal thoughts, contributions, and learnings during the creation
          of <strong>Typhood</strong> — our disaster management chatbot designed to help HKUST students cook  conveniently during typhoons.
          Through this project, I gained deeper understanding of user empathy, iterative prototyping, and how to design a tool through user feedback.
        </p>

        {/* Problem Section */}
        <h2 className="text-2xl font-semibold text-teal-200">1. Understanding the Problem</h2>
        <p className="text-[#E5E7EB] leading-relaxed">
          Our research began by observing how students struggle during typhoons — canteens close, groceries run out,
          and many students have limited cooking knowledge or access to equipment. I was responsible for analyzing
          user interviews and identifying recurring pain points like <em>“limited ingredients,” “shared appliances,”</em>
          and <em>“stress about food safety.”</em> This process taught me that even simple, temporary disruptions like typhoons
          can expose big gaps in accessibility and preparedness.
        </p>


        {/* Ideation Section */}
        <h2 className="text-2xl font-semibold text-teal-200">2. Ideation and Concept Development</h2>
        <p className="text-[#E5E7EB] leading-relaxed">
          During brainstorming, our team explored multiple chatbot concepts, such as a shared kitchen availability bot
          and a smart shopping bot. I contributed the idea of combining recipe suggestions with safety awareness — turning
          the chatbot into a comforting guide, not just a recipe generator. Through <strong>speed dating</strong> interviews,
          we quickly learned that students valued immediacy and empathy more than technical depth.
        </p>
        <Image
          src="/images/projects/Mindmap.png"
          alt="mind map image"
          width={300}
          height={300}
          className="mx-auto mt-4" // Add some margin top
        />
        <p className="text-[#E5E7EB] leading-relaxed">
          I helped design the mind map and early storyboards, ensuring each idea remained grounded in real dorm-life
          constraints. The storyboards itself are generated by AI to emphasize the idea we had in the group’s and put into a piece of art.
          This phase reminded me that creativity flourishes when it solves real problems elegantly.
        </p>

        {/* Prototyping Section */}
        <h2 className="text-2xl font-semibold text-teal-200">3. Prototyping and Iteration</h2>
        <p className="text-[#E5E7EB] leading-relaxed">
          I worked on low-fidelity with sketches and while a group member made high-fidelity prototype to effectively split the job. 
          My main contribution was refining the chatbot’s conversation flow — reducing unnecessary steps, improving clarity, and testing how users could
          input ingredients or choose between text and speech. Early users found the UI too complicated, so I helped
          simplify it by reducing settings and making the interface more visual and intuitive.
        </p>

        <p>
          <Image
            src="/images/projects/Sketch.jpeg"
            alt="mind map image"
            width={300}
            height={300}
            className="mx-auto mt-4" // Add some margin top
          />
          <figcaption className="text-center text-sm text-gray-400 mt-2 mb-8 italic">
            User research mind map showing pain points and opportunities
          </figcaption>
          <Image
            src="/images/projects/Typhood_bot.png"
            alt="mind map image"
            width={450}
            height={500}
            className="mx-auto mt-4" // Add some margin top
          />
          <figcaption className="text-center text-sm text-gray-400 mt-2 italic">
            User research mind map showing pain points and opportunities
          </figcaption>
        </p>
        <p className="text-[#E5E7EB] leading-relaxed">
          I learned how to balance accessibility and aesthetics — minimal design doesn’t mean lacking personality.
          Adding small touches like an icon and clear prompts made the bot feel more approachable during stressful
          conditions.
        </p>

        {/* User Testing Section */}
        <h2 className="text-2xl font-semibold text-teal-200">4. User Testing and Feedback</h2>
        <p className="text-[#E5E7EB] leading-relaxed">
          In user testing, I helped conduct surveys and collect feedback via Google Forms. The insights showed users
          preferred fewer input options, more visuals, and a voice input feature. 
          The questions initially were made by the group by brainstorming questions that made sense,
          but we opted with other questions to make them better. 
          To make the questions better, we used ai to revised and make it more simple to understand, 
          where Typhood could understand casual phrases and adapt recipes based on limited dorm appliances.
        </p>
        <Image
          src="/images/projects/Usability_form.png"
          alt="mind map image"
          width={450}
          height={400}
          className="mx-auto mt-4" // Add some margin top
        />
        <p className="text-[#E5E7EB] leading-relaxed">
          Seeing how students interacted with Typhood helped my belief that design is an ongoing conversation —
          feedback isn’t just a validation step, it’s part of creation itself.
        </p>

        {/* Reflection Section */}
        <h2 className="text-2xl font-semibold text-teal-200">5. Personal Reflection</h2>
        <p className="text-[#E5E7EB] leading-relaxed">
          This project taught me how to design a disaster management tool during a typhoon and 
          I realized that simplicity, efficiency and reliability for the management tool is more important than 
          a overcomplicated design. Through Typhood, I practiced turning these feedback we got from the users 
          into practical design decisions which made it look like the Typhood today.
        </p>
        <p className="text-[#E5E7EB] leading-relaxed">
          Personally, I’m proud of my role in simplifying the personalization flow and improving the step-by-step instruction.
          I learned that great UX doesn’t come from adding features, but from removing unnecessary features that users find annoying 
          and not often doesn’t use. Our users didn’t want another app — they wanted a fast, simple and reliable chatbot. 
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
