"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGraduationCap, faCertificate } from "@fortawesome/free-solid-svg-icons";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.ul
        className="list-disc pl-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          { name: "Node.js", icon: faCode, link: "https://nodejs.org/" },
          { name: "Express", icon: faCode, link: "https://expressjs.com/" },
          { name: "SQL", icon: faCode },
          { name: "HTML", icon: faCode },
          { name: "CSS", icon: faCode },
          { name: "JavaScript", icon: faCode },
          { name: "React", icon: faCode },
          { name: "Git", icon: faCode },
          { name: "Github", icon: faCode },
        ].map((skill, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <FontAwesomeIcon icon={skill.icon} className="text-teal-500" />
            {skill.link ? (
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300"
              >
                {skill.name}
              </a>
            ) : (
              skill.name
            )}
          </motion.li>
        ))}
      </motion.ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.ul
        className="list-disc pl-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          { name: "BTech in Information Technology", icon: faGraduationCap },
          { name: "IIIT Allahabad, India", icon: faGraduationCap },
        ].map((edu, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <FontAwesomeIcon icon={edu.icon} className="text-purple-500" />
            {edu.name}
          </motion.li>
        ))}
      </motion.ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.ul
        className="list-disc pl-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          { name: "SQL", icon: faCertificate },
          { name: "Web Development", icon: faCertificate },
        ].map((cert, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <FontAwesomeIcon icon={cert.icon} className="text-yellow-500" />
            {cert.name}
          </motion.li>
        ))}
      </motion.ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About me image"
          className="transition-all duration-500 ease-in-out transform hover:scale-105"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            About Me
          </motion.h2>
          <p className="text-base lg:text-lg">
          I am a tech enthusiast with a passion for developing effective solutions 
          to real-world problems. My experience spans working with JavaScript, React, 
          Redux, Node.js, Express, SQL, HTML, CSS, and Git. As a quick learner, 
          I’m always eager to expand my knowledge and skill set. 
          I thrive in collaborative environments and enjoy working with teams to build impactful and innovative applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
