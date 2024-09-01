import { useEffect, useState } from "react";
import AddBtn from "./AddBtn";
import LatestProject from "./LatestProject";
import ProjectList from "./ProjectList";
import { requestProject, requestProjects } from "../../../modules/main";
import { useModal } from "../../../modules/modalUtils";
import "../../../styles/Project.css";
import "../../../styles/LatestProject.css";
import "../../../styles/ProjectList.css";
import "../../../styles/MainSchedule.css";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const { isOpen, onOpen, onClose } = useModal();

  const [latestProject, setLatestProject] = useState(null);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await requestProjects();

        if (response.data && response.data.length > 0) {
          setProjects(response.data); // 상태 업데이트를 기다림
          setLatestProject(response.data[0]); // 첫 번째 프로젝트 설정
          setProjectList(response.data.slice(1)); // 나머지 프로젝트 목록 설정
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []); // 의존성 배열에 빈 배열을 넣어, 컴포넌트 마운트 시 한 번만 실행

  const showProject = async () => {
    const response = await requestProject(latestProject);

    navigate(`/${latestProject.id}`, { state: { project: response.data } });
  };

  return (
    <div className="project-container">
      <button
        onClick={() => {
          console.log("최신 프로젝트 ", latestProject);
          console.log("프로젝트 리스트 ", projectList);
        }}
      >
        확인해보세요
      </button>
      <div className="schedule-header">
        <h2>●프로젝트</h2>
        <AddBtn />
      </div>
      <hr className="project-divider" />
      <LatestProject
        onClick={() => {
          showProject();
        }}
        project={latestProject}
      />
      <ProjectList projectList={projectList} />
    </div>
  );
};

export default Project;
