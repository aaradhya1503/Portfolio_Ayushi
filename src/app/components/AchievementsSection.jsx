"use client";
import React from "react";
import { motion } from "framer-motion";

const achievementsList = [
  {
    title: "Work Experience",
    description: `
      <strong>Full Stack Intern | Bosonique</strong><br>
      <em>May 2024 - July 2024 | Remote (Hybrid)</em><br><br>
      - Developed and optimized features using React.js, Node.js, Express.js, and MongoDB.<br>
      - Implemented secure user authentication and enhanced platform performance.<br>
      - Collaborated with cross-functional teams to deliver efficient, user-focused solutions.
    `,
  },
  {
    title: "Position of Responsibility",
    description: `
      Served as the <strong>Technical Head</strong> of Aparoksha, IIIT Allahabad's tech fest,<br>
      organizing multiple events and hackathons.<br><br>
      <strong>Lead organizer of Out of Context (design hackthon)</strong>
    `,
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-3xl font-bold">Achievements</h1>
      </motion.div>
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col items-center">
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center my-8 sm:my-0 sm:mb-12"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            transition={{
              duration: 0.8,
              delay: index * 0.3, // Add delay for a staggered effect
            }}
          >
            <h2 className="text-white text-2xl font-bold">{achievement.title}</h2>
            <p
              className="text-[#ADB7BE] text-base text-center mt-2"
              dangerouslySetInnerHTML={{ __html: achievement.description }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
