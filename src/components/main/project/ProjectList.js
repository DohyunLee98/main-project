import React from "react";
import "../../../styles/ProjectList.css";

const ProjectList = ({ projectList }) => {
  return (
    <div className="project-list-container">
      <div className="project-list">
        {projectList && projectList.length > 0 ? (
          projectList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-title">{project.title}</div>
              <div className="project-card-profile-container">
                <img
                  src={project.creatorProfile}
                  alt="Creator Profile"
                  className="project-card-profile-image"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="empty-project-list"></div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
