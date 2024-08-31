import { useEffect, useState } from "react";
import AddBtn from "./AddBtn";
import LatestProject from "./LatestProject";
import ProjectList from "./ProjectList";
import { requestProjects } from "../../../modules/main";
import "../../../styles/Project.css";
import "../../../styles/LatestProject.css";
import "../../../styles/ProjectList.css";

const Project = () => {
  const [projects, setProjects] = useState(null);
  const [latestProject, setLatestProject] = useState(null);
  const [projectList, setProjectList] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await requestProjects();
        setProjects(response);

        if (projects && projects.length > 0) {
          setLatestProject(projects[0]); // 첫 번째 프로젝트 설정
          setProjectList(projects.slice(1)); // 나머지 프로젝트 목록 설정
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []); // 의존성 배열에 빈 배열을 넣어, 컴포넌트 마운트 시 한 번만 실행

  return (
    <div className="project-container">
      <div className="project-header">
        <h2>● 프로젝트</h2>
        <div className="project-buttons">
          <AddBtn />
        </div>
      </div>
      <hr className="project-divider" />
      <LatestProject project={latestProject} />
      <ProjectList projectList={projectList} />
    </div>
  );
};

export default Project;
