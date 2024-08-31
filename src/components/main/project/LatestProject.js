import React from "react";
import "../../../styles/LatestProject.css";
import GanttChart from "../../common/Gantt";

const LatestProject = ({ title, description, ganttChart, creatorProfile }) => {
  return (
    <div className="latest-project-container">
      <div className="latest-project-text-container">
        <div className="latest-project-title">
          <label>제목</label>
          <div>{title}</div>
        </div>
        <div className="latest-project-dueDate">
          <label>설명</label>
          <div>{description}</div>
        </div>
        <div className="latest-project-ganttChart">
          <label>간트차트</label>
          <div>{ganttChart}</div>
        </div>
      </div>
      <div className="latest-project-profile-container">
        <img
          src={creatorProfile}
          alt="Creator Profile"
          className="latest-project-profile-image"
        />
      </div>
    </div>
  );
};

export default LatestProject;
