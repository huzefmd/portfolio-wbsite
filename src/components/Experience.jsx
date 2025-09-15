import React from "react";

function Experience() {
    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "NetCraftz",
            date: "Jan 2025 – Jun 2025",
            description:
                "Developed a visualization app to help students understand and learn algorithms interactively.",
        },
        {
            role: "Full Stack Developer",
            company: "GainGrub (Freelance)",
            date: "2025",
            description:
                "Built a full-stack e-commerce platform for delivering food products, including authentication, cart, and payment integration.",
        },
    ];



    return (
        <section className="w-full max-w-3xl mx-auto  ">
            <h1 className="text-3xl font-bold text-start mb-12">Experience</h1>
            <div className="relative border-l-2 border-blue-500">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="mb-10 ml-6">
                        {/* Dot */}
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border border-white"></div>
                        {/* Content */}
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <span className="text-gray-300 text-sm">
                            {exp.company} • {exp.date}
                        </span>
                        <p className="mt-2 text-gray-500">{exp.description}</p>
                    </div>
                ))}
            </div>
            <hr className="  border-gray-500" />
        </section>
    );
}

export default Experience;
