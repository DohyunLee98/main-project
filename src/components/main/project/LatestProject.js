import React from "react";
import "../../../styles/LatestProject.css"; // CSS 파일을 import

const LatestProject = ({ title, dueDate, ganttChart, creatorProfile }) => {
  return (
    <div className="latest-project-container">
      <div className="latest-project-text-container">
        <div className="latest-project-title">
          <label>제목</label>
          <div>{title}</div>
        </div>
        <div className="latest-project-dueDate">
          <label>기한</label>
          <div>{dueDate}</div>
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
