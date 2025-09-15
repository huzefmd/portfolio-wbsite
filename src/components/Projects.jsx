import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {
            title: "Gain Grub",
            description:
                "A full-stack e-commerce platform for food product delivery with features like product listings, cart management, and secure checkout.",
            link: "https://github.com/huzefmd/Gain-Grub",
            tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        },
        {
            title: "Algorithmic Visualizer",
            description:
                "A web application that helps students visualize and understand algorithms through interactive step-by-step animations.",
            link: "https://algo-visual-1sp8whxcl-huzefmds-projects.vercel.app/",
            tags: ["React", "TypeScript", "Tailwind CSS"],
        },
        {
            title: "Vibe Code .AI",
            description:
                "An AI-powered code assistant web app that provides intelligent code suggestions and helps developers write faster and cleaner code.",
            link: "https://vibe-code-ai-three.vercel.app/",
            tags: ["React", "Tailwind CSS", "Node.js"],
        },
        {
            title: "Rock GYM",
            description:
                "A modern fitness website showcasing gym programs, schedules, and membership plans with a responsive design.",
            link: "https://rock-gym.vercel.app",
            tags: ["React", "Tailwind CSS", "Node.js"],
        },
    ];


    return (
        <section className="w-full max-w-6xl mx-auto  ">
            <h1 className="text-3xl font-bold text-start mb-12">Projects</h1>

            {/* Row Layout */}
            <div className="flex flex-col gap-8  justify-center  items-center">
                {projects.map((proj, idx) => (
                    <ProjectCard key={idx} {...proj} />
                ))}
            </div>
            <hr className=" mt-10 border-gray-500" />
        </section>
    );
}

export default Projects;
