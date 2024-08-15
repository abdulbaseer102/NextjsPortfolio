import ProjectCard from "../projects/page";


export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "This is the first project.",
      imageUrl: "https://reactemplates.com/static/e858db5fabad0abff375168742898dba/170ea/19122093990.png",
    },
    {
      title: "Project Two",
      description: "This is the second project.",
      imageUrl: "https://reactemplates.com/static/e858db5fabad0abff375168742898dba/170ea/19122093990.png",
    },
    {
      title: "Project Three",
      description: "This is the third project.",
      imageUrl: "https://reactemplates.com/static/e858db5fabad0abff375168742898dba/170ea/19122093990.png",
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gradient-to-tr from-[#8965ba] to-[#1d0429] p-8 sm:p-12 lg:p-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white">My Projects</h1>
        <p className="text-lg text-gray-200 mt-4">
          Here are some of the projects I've worked on recently. Each one represents a piece of my journey in web development.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
