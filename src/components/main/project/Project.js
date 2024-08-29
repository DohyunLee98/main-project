import { useEffect, useState } from "react";
import AddBtn from "./AddBtn";
import LatestProject from "./LatestProject";
import ManagementBtn from "./ManagementBtn";
import ProjectList from "./ProjectList";

const Project = () => {
  const [latestProject, setLatestProjects] = useState(null);
  const [projectList, setProjectList] = useState(null);

  return (
    <div style={{ padding: "20px", width: "80%", margin: "0 auto" }}>
      {/* 상단 영역: 프로젝트 텍스트와 추가 및 관리 버튼 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>●프로젝트</h2>
        <div>
          <AddBtn />
          <ManagementBtn />
        </div>
      </div>

      <hr />

      {/* 프로젝트 목록 및 최신 프로젝트 */}
      <LatestProject />
      <ProjectList />
    </div>
  );
};

export default Project;
