/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col justify-center items-center w-80 h-80 shadow-xl rounded-xl">
      <h3 className="flex w-full h-1/6 text-center items-center justify-center bg-slate-200 rounded-t-xl text-2xl font-semibold tracking-tight">
        {project.name}
      </h3>
      <div className="flex justify-center items-center w-full h-3/6">
        <img src={project.image} alt={project.name} className="h-full" />
      </div>
      <p className="flex justify-center items-center w-full h-2/6 text-lg font-semibold tracking-tight">
        {project.description}
      </p>
    </div>
  );
}
