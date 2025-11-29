"use client";
import { useState } from "react";

export default function Project1Content() {
  const [showDetails, setShowDetails] = useState(false);

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

        <button
          className="mt-4 text-sm font-medium text-teal-200"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </section>
  );
}