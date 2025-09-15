import React from "react";

function ProjectCard({ title, description, link, tags }) {
    return (
        
        <div className=" border border-gray-700   rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300  max-w-lg">
            <h3 className="text-xl  text-blue-600 font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            {tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  hover:underline"
                >
                    View Project →
                </a>
            )}
        </div>
    );
}

export default ProjectCard;
