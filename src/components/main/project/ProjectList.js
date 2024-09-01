import React from "react";
import "../../../styles/ProjectList.css";
import { useNavigate } from "react-router-dom";

const ProjectList = ({ projectList }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleCardClick = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
    // 프로젝트 id를 사용하여 해당 프로젝트의 상세 페이지로 이동
  };

  return (
    <div className="project-list-container">
      <div className="project-list">
        {projectList && projectList.length > 0 ? (
          projectList.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleCardClick(project)}
            >
              <div className="project-card-title">{project.title}</div>
              <div className="project-card-dueDate">{project.dueDate}</div>
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
