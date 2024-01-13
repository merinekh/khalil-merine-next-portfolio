import React from "react";
import Image from "next/image";

import web1 from "../../public/web1.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web2 from "../../public/web2.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const projects = [
  {
    title: "Surface Nouvelle Ère",
    description:
      "Developed a cutting-edge website for 'Surface Nouvelle Ère,' a Montreal-based countertop business, using Next.js to enhance their digital presence and showcase their craftsmanship.",
    githubLink: "https://www.github.com/merinekh/surface_nouvelle_ere",
    imageSrc: web6,
    technologies: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Visually stunning galleries showcasing countertop designs.",
      "Intuitive navigation for exploring countertop styles and materials.",
      "Optimal performance and responsive design across devices.",
      "SEO enhancements for increased online visibility.",
    ],
  },
  {
    title: "BrainFlix",
    description:
      "Implemented a full-stack solution for 'BrainFlix,' a video-sharing platform, using Next.js, React, and Node.js to provide server-side functionality and a seamless user experience.",
    githubLink: "https://www.github.com/merinekh/khalil-merine-brainflix",
    imageSrc: web5,
    technologies: ["Next.js", "React", "Node.js", "Express"],
    features: [
      "Single-page clone of YouTube with dynamic video page updates.",
      "User authentication and video upload capabilities.",
      "Proficient full-stack development demonstrating dynamic and functional web applications.",
    ],
  },
  {
    title: "Bandsite",
    description:
      "Crafted the front-end of a site resembling Ticketmaster for a seamless ticket booking experience. Utilized Next.js, React, and Tailwind CSS for optimal user interaction.",
    githubLink: "https://www.github.com/merinekh/khalil-merine-bandsite",
    imageSrc: web4,
    technologies: ["Next.js", "React", "Bootstrap"],
    features: [
      "User-friendly interface for viewing upcoming shows.",
      "Effortless ticket booking experience.",
      "Expertise in front-end development for event-based websites.",
    ],
  },
  {
    title: "Air Canada Industry Project",
    description:
      "Collaborated on enhancing customer experience and engagement for Air Canada. Utilized a multidisciplinary approach and the latest technologies to deliver effective solutions.",
    githubLink: "https://www.github.com/merinekh/",
    imageSrc: web1,
    technologies: ["Collaborative Multidisciplinary Approach"],
    features: [
      "Enhanced customer experience for a diverse user base.",
      "Increased engagement through effective solutions.",
    ],
  },
  {
    title: "DailyFit",
    description:
      "Developed a comprehensive single-page web app for personalized meal and workout planning. Utilized React, Sass, Bootstrap, Node.js, and Express for a robust full-stack solution.",
    githubLink: "https://www.github.com/merinekh/my-fitness-app",
    imageSrc: web2,
    technologies: ["React", "Sass", "Bootstrap", "Node.js", "Express"],
    features: [
      "Personalized meal and workout planning.",
      "Proficiency in full-stack development.",
      "Creating a comprehensive platform for user engagement.",
    ],
  },
  {
    title: "InStock",
    description:
      "Collaborated on building a full-stack web app for inventory and warehouse management. Utilized the latest technologies and API integration for a seamless user experience.",
    githubLink: "https://www.github.com/merinekh/siar-instock-client",
    imageSrc: web3,
    technologies: ["Full-stack Development", "API Integration"],
    features: [
      "Full-stack web app for inventory and warehouse management.",
      "Seamless user experience through API integration.",
      "Demonstrated ability to deliver effective solutions.",
    ],
  },
];

export default function Project() {
  return (
    <div className="flex flex-wrap gap-10 justify-center m-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative w-72 rounded-lg overflow-hidden shadow-md cursor-pointer transform hover:scale-105 transition-transform"
        >
          {index < 3 && (
            <div className="text-black text-sm bg-white px-2">
              *Scrollable Image
            </div>
          )}
          <div
            className={`w-full ${
              index < 3 ? "h-36 overflow-y-auto" : "h-50"
            } relative`}
          >
            <Image
              className="object-cover w-full h-full"
              alt=""
              layout="responsive"
              src={project.imageSrc}
            />
          </div>
          <div className="flex flex-col h-auto justify-between p-4 bg-white rounded">
            <div>
              <h1 className="text-lg font-semibold mb-2">{project.title}</h1>
              <p className="text-sm overflow-hidden mb-4">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="text-md font-semibold mb-2">Technologies Used:</h2>
              <ul className="list-disc list-inside mb-2">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <h2 className="text-md font-semibold mb-2">Key Features:</h2>
              <ul className="list-disc list-inside">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
