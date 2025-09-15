import React from "react";

function Education() {
    const education = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            school: "Bapu Degree College",
            year: "2022 - 2025",
            grade: "CGPA : 9.14",
            description:
                "Focused on software development, data structures, algorithms, and full-stack web development.",
        },
        {
            degree: "PUC (Commerce - CEBA)",
            school: "Bapu PU College",
            year: "2020 - 2022",
            grade: "Percentage : 88%",
            description:
                "Specialized in Commerce with a focus on Computer Science, Economics, Business Studies, and Accountancy, building a strong foundation in analytical and business concepts.",
        },
        {
            degree: "SSLC",
            school: "Sri Vidhya Kendra",
            year: "2019 - 2020",
            grade: "Percentage : 78%",
            description:
                "Completed secondary education with a strong foundation in mathematics and science.",
        },
    ];

    return (
        <section className="w-full max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-10">Education</h1>

            <div className="relative border-l-2 border-blue-600 ml-4">
                {education.map((edu, idx) => (
                    <div key={idx} className="mb-10 ml-6">
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border border-white"></div>
                        {/* Card */}
                        <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h2 className="text-lg font-semibold text-blue-400">
                                {edu.degree}
                            </h2>
                            <p className="text-gray-400">
                                {edu.school} • {edu.year}
                            </p>
                            <p className="text-gray-400">{edu.grade}</p>
                            <p className="mt-2 text-gray-300">{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="  border-gray-500" />
        </section>
    );
}

export default Education;
