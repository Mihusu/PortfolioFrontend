import { projectsData } from "../../../lib/projects";

export async function GET(request, { params }) {
  const id = Number(params.id);
  const project = projectsData.find((p) => p.id === id);
  if (!project) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }
  return new Response(JSON.stringify(project), {
    headers: { "content-type": "application/json" },
  });
}