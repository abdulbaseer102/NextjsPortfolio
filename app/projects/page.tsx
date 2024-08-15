
import Image from "next/image";

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
