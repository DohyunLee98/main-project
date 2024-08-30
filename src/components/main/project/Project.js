import { useEffect, useState } from "react";
import AddBtn from "./AddBtn";
import LatestProject from "./LatestProject";
import ManagementBtn from "./ManagementBtn";
import ProjectList from "./ProjectList";
import { requestProjects } from "../../../modules/main";

const Project = () => {
  const [latestProject, setLatestProject] = useState(null);
  const [projectList, setProjectList] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await requestProjects();

        if (response && response.length > 0) {
          setLatestProject(response[0]); // 첫 번째 프로젝트 설정
          setProjectList(response.slice(1)); // 나머지 프로젝트 목록 설정
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []); // 의존성 배열에 빈 배열을 넣어, 컴포넌트 마운트 시 한 번만 실행

  return (
    <div>
      ● Project
      <AddBtn />
      <ManagementBtn />
      <hr />
      <LatestProject project={latestProject} />
      <ProjectList />
    </div>
  );
};

export default Project;
