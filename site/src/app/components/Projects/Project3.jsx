"use client";
import Image from "next/image";

export default function Project3Content() {
  return (
    <section className="text-white min-h-screen p-8 space-y-10">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-teal-300 mb-6">
          COMP4461 Project 3: EduGlobe — Diary Reflection
        </h1>

        <p className="text-[#E5E7EB] leading-relaxed">
          This diary contains my personal reflections, thoughts, and
          contributions throughout the creation of <strong>EduGlobe</strong> —
          a VR application that helps students explore universities around the
          world in a more immersive way. Our project addresses a key problem:
          students often struggle to <em>visualize campuses abroad</em> and make
          confident decisions about where to study.
        </p>

        {/* Section 1: Understanding the Problem */}
        <h2 className="text-2xl font-semibold text-teal-200">
          1. Understanding the Problem
        </h2>

        <p className="text-[#E5E7EB] leading-relaxed">
          We began by empathizing with prospective students who feel stressed,
          overwhelmed, and unsure when deciding where to study. Based on our
          interviews and observations (page 7), many students are{" "}
          <em>scared of unfamiliar environments, overwhelmed by choices, and
          unable to visualize what life abroad might look like</em>.
          This phase helped me realize that school selection is not only a
          rational decision but an emotional one.
        </p>

        <Image
          src="/images/projects/edu_interviews.png"
          alt="Interview photos"
          width={450}
          height={300}
          className="mx-auto mt-4"
        />

        <p className="text-[#E5E7EB] leading-relaxed">
          These user insights shaped our mission: to help students experience
          universities more tangibly through VR, reducing uncertainty and helping
          them make more confident choices.
        </p>

        {/* Section 2: Ideation */}
        <h2 className="text-2xl font-semibold text-teal-200">
          2. Ideation and Concept Development
        </h2>

        <p className="text-[#E5E7EB] leading-relaxed">
          Our team translated the user problems into a detailed POV mindmap
          (page 9), identifying pain points such as struggling to compare
          schools, financial concerns, and difficulty imagining student life.
          Using these insights, we brainstormed multiple concepts, including
          <em>Academic Fit VR, School Spirit VR, Culture Immersion VR,</em> and{" "}
          <strong>Campus Exploration VR</strong>.
        </p>

        <Image
          src="/images/projects/edu_mindmap.png"
          alt="POV Mindmap"
          width={350}
          height={350}
          className="mx-auto mt-4"
        />

        <p className="text-[#E5E7EB] leading-relaxed">
          My contribution during ideation involved helping refine questions for
          our speed-dating interviews and summarizing qualitative user comments.
          Through quick rotations with 10 students (page 12), the overwhelming
          preference was for the <strong>Campus Exploration VR</strong> concept,
          which became the foundation for EduGlobe.
        </p>

        {/* Section 3: Prototyping */}
        <h2 className="text-2xl font-semibold text-teal-200">
          3. Prototyping and Iteration
        </h2>

        <p className="text-[#E5E7EB] leading-relaxed">
          We then moved into prototyping, first sketching rough wireframes of
          how users would navigate the experience (page 15). This included:
        </p>

        <ul className="list-disc ml-6 text-[#E5E7EB]">
          <li>Selecting a school to tour</li>
          <li>Entering a 360° VR campus view</li>
          <li>Switching between campus locations</li>
          <li>Ending the tour through simple UI buttons</li>
        </ul>

        <Image
          src="/images/projects/edu_prototype.png"
          alt="Prototype sketches"
          width={450}
          height={350}
          className="mx-auto mt-4"
        />

        <p className="text-[#E5E7EB] leading-relaxed">
          Although I was not the main designer for high-fidelity prototypes, I
          participated in giving feedback, ensuring the experience felt smooth
          and intuitive for first-time users of VR headsets. I focused especially
          on clarity of text prompts and controller instructions.
        </p>

        {/* Section 4: Evaluation — YOUR MAIN CONTRIBUTION */}
        <h2 className="text-2xl font-semibold text-teal-200">
          4. Evaluation and User Feedback (My Main Contribution)
        </h2>

        <p className="text-[#E5E7EB] leading-relaxed">
          The part of the project where I contributed the most was the{" "}
          <strong>Evaluation</strong> stage. Our team created a qualitative
          Google Form to gather user insights, including questions about
          usability, confidence in choosing a university, and overall VR
          usefulness (page 19).
        </p>

        <Image
          src="/images/projects/edu_survey.png"
          alt="Survey questions"
          width={450}
          height={350}
          className="mx-auto mt-4"
        />

        <p className="text-[#E5E7EB] leading-relaxed">
          I took responsibility for designing clearer survey questions, refining
          wording to ensure participants could give meaningful feedback. I also
          evaluated all user responses, organizing them into themes such as:
        </p>

        <ul className="list-disc ml-6 text-[#E5E7EB]">
          <li>
            VR made university exploration feel <em>more immersive</em> than
            traditional research.
          </li>
          <li>
            Participants felt <strong>more confident</strong> about imagining life
            on a new campus.
          </li>
          <li>
            Some users wanted <strong>more locations</strong> and smoother
            transitions between scenes.
          </li>
          <li>The UI was generally perceived as easy to understand.</li>
        </ul>

        <p className="text-[#E5E7EB] leading-relaxed mt-4">
          Analyzing these results helped our team validate that EduGlobe genuinely
          helped users address the problem highlighted earlier: the difficulty of
          visualizing life at a school they’ve never been to.
        </p>

        {/* Section 5: Personal Reflection */}
        <h2 className="text-2xl font-semibold text-teal-200">
          5. Personal Reflection
        </h2>

        <p className="text-[#E5E7EB] leading-relaxed">
          Through Project 3, I learned how VR can create emotionally engaging
          experiences, especially for decisions involving uncertainty and fear of
          the unknown. Working on the evaluation portion deepened my appreciation
          for how important it is to structure questions clearly and interpret
          feedback meaningfully. A good design can only improve when its
          weaknesses are revealed honestly through user testing.
        </p>

        <p className="text-[#E5E7EB] leading-relaxed">
          I am proud of my role in transforming raw user feedback into actionable
          insights that shaped our final concept. EduGlobe taught me that
          innovative technology alone isn’t enough—what matters most is how well
          it aligns with real users’ emotions, goals, and concerns.
        </p>
      </div>
    </section>
  );
}
