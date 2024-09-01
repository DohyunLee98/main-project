import { useEffect, useState } from "react";
import AddBtn from "./AddBtn";
import LatestProject from "./LatestProject";
import ProjectList from "./ProjectList";
import {
  requestProject,
  requestProjects,
  showProject,
} from "../../../modules/main";
import "../../../styles/Project.css";
import "../../../styles/LatestProject.css";
import "../../../styles/ProjectList.css";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();

  const [latestProject, setLatestProject] = useState(null);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await requestProjects();

        if (response.data && response.data.length > 0) {
          setLatestProject(response.data[0]); // 첫 번째 프로젝트 설정
          setProjectList(response.data.slice(1)); // 나머지 프로젝트 목록 설정
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
      <LatestProject
        onClick={() => {
          showProject(navigate, latestProject);
        }}
        project={latestProject}
      />
      <ProjectList projectList={projectList} />
    </div>
  );
};

export default Project;
