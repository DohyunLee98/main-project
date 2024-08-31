import React from "react";
import { useLocation } from "react-router-dom";
import DirectoryViewer from "../components/project/document/Documents";
import Invite from "../components/project/member/Invite";
import Schedule from "../components/project/schedule/Schedule";
import Title from "../components/project/Title";
import "../styles/ProjectPage.css";

const ProjectPage = () => {
  const location = useLocation();
  const { project } = location.state || {};

  return (
    <div className="project-page-container">
      <button
        onClick={() => {
          console.log(project);
        }}
      >
        화긴
      </button>
      {/* 프로젝트 제목과 공지사항 */}
      <Title project={project} />
      {/* 일정 섹션: 캘린더, 칸반, 간트차트 */}
      <Schedule />
      {/* 문서 관리 섹션 */}
      <DirectoryViewer />
      {/* 멤버 관리 섹션 */}
      <Invite />
    </div>
  );
};

export default ProjectPage;
