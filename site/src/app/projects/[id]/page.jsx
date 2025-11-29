import dynamic from "next/dynamic";
import { projectsData } from "../../lib/projects";
import PropTypes from 'prop-types';

const Project1Content = dynamic(
  () => import("../../components/Projects/Project1"),
  { ssr: false }
);
const Project2Content = dynamic(
  () => import("../../components/Projects/Project2"),
  { ssr: false }
);
const Project3Content = dynamic(
  () => import("../../components/Projects/Project3"),
  { ssr: false }
);

export default function ProjectPage({ params }) {
    const { id } = params;
    const project = projectsData.find((p) => String(p.id) === String(id));

    const contents = {
        "1": <Project3Content />,
        "2": <Project2Content />,
        "3": <Project1Content />,
    };

    if (!project) {
        return <div className="text-white p-8">Project not found</div>;
    }

    return (
        <main>
            <h1 className="text-3xl font-bold text-white p-8">{project.title}</h1>
            {contents[id] ?? <div className="text-white p-8">No detail available</div>}
        </main>
    );
}

ProjectPage.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
};
