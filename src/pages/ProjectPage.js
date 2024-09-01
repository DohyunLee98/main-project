import React from "react";
import { useLocation } from "react-router-dom";
import DirectoryViewer from "../components/project/document/Documents";
import Invite from "../components/project/member/Invite";
import Schedule from "../components/project/schedule/Schedule";
import Title from "../components/project/Title";
import "../styles/ProjectPage.css";

const ProjectPage = () => {
  const location = useLocation();
  const project = location.state || {};

  return (
    <div className="project-page-container">
      {/* 프로젝트 제목과 공지사항 */}
      <div className="project-section">
        <Title project={project[0]} />
      </div>
      {/* 일정 섹션: 캘린더, 칸반, 간트차트 */}
      <div className="project-section">
        <Schedule />
      </div>
      {/* 문서 관리 섹션 */}
      <div className="project-section">
        <DirectoryViewer />
      </div>
      {/* 멤버 관리 섹션 */}
      <div className="project-section">
        <Invite />
      </div>
    </div>
  );
};

export default ProjectPage;
