import React, { useState } from "react";
import projectsData from "../assets/portfolioProjects.json";
import Popup from "../components/Popup";
import formatText from "../helpers";

interface ProjectProps {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
}

function Portfolio() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectProps>(projectsData.porfolioProjects[0]);
  const handleButtonClick = (project: ProjectProps) => {
    setCurrentProject(project);
    setShowPopup(true);
  };

  const childElements = projectsData.porfolioProjects.map((project) => (
    <div className='projectItem' onClick={() => handleButtonClick(project)} key={project.id}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", gap: "1rem" }}>
        <h3 style={{ flexGrow: 1, margin: 0 }}>{project.title}</h3>
        <p style={{ margin: 0, fontFamily: "sans-serif", textAlign: "right" }}>{project.date}</p>
      </div>
      <img
        src={`./project_images/${project.image}`}
        alt='Image Unavailable'
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
          ((e.currentTarget as HTMLImageElement).src = "./project_images/placeholder.jpg")
        }
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  ));

  return (
    <div id='Portfolio'>
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>My Projects</h1>
      <div className='gridContainer'>{childElements}</div>
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: "12px 0 0 0" }}>{currentProject.title}</h2>
            <div style={{ marginTop: 15 }}>
              {currentProject.githubLink && (
                <a href={currentProject.githubLink} target='_blank' rel='noopener noreferrer'>
                  <img className='logoIcon' src='./logo_images/github.png' alt='Github' />
                </a>
              )}
              {currentProject.demoLink && (
                <a href={currentProject.demoLink} target='_blank' rel='noopener noreferrer'>
                  <img className='logoIcon' src='./logo_images/paperclip.png' alt='Demo' />
                </a>
              )}
            </div>
          </div>
          {formatText(currentProject.description)}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px" }}>
            {currentProject.techStack.map((tech) => (
              <img src={`./logo_images/${tech.toLowerCase()}.png`} alt={tech} style={{ height: "50px", width: "auto" }} />
            ))}
          </div>
        </Popup>
      )}
    </div>
  );
}

export default Portfolio;
