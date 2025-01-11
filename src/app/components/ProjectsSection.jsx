"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chegger:A Chegg Notification System",
    description:
      "It is a browser extension which notifies subject matter experts on receiving questions to be answered on Chegg.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aaradhya1503/Chegger",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Secret_Coders",
    description: "A website for systematic farming for farmers in local language.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aaradhya1503/Secret_Coders",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Alumni Cell Website",
    description:
      "Developed administrative features for alumni verification and event management, cutting processing time and improving user experience with efficient announcement handling.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://assic.iiita.ac.in/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Facial Expression Recognition",
    description: "A facial recognition system that classifies human emotions.",
    image: "/images/projects/4.png",
    tag: ["All", "ML"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations using Firebase.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "A complete roadmap for learning full-stack development.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Animation configuration for left-to-right motion
  const cardMotion = {
    animate: {
      x: ["-100%", "100%"], // Smooth left-to-right motion
      transition: {
        duration: 15, // Longer duration for smoother animation
        repeat: Infinity, // Continuous loop
        ease: "linear", // Uniform speed
      },
    },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-4 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <motion.div
        className="overflow-hidden"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        <motion.ul
          className="flex gap-16 px-16" // Increased gap between cards
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          {filteredProjects.map((project) => (
            <motion.li
              key={project.id}
              variants={cardMotion}
              animate="animate"
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
              style={{
                minWidth: "400px", // Wider card width
                whiteSpace: "normal", // Wrap text
                overflowWrap: "break-word", // Handle long words
              }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
