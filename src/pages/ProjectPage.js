import { useLocation } from "react-router-dom";
import DirectoryViewer from "../components/project/document/Document";
import Invite from "../components/project/member/Invite";
import Schedule from "../components/project/schedule/Schedule";

const ProjectPage = () => {
  const location = useLocation();
  const { project } = location.state || {};

  return (
    <div>
      {project}
      <Schedule />
      <DirectoryViewer />
      <Invite />
    </div>
  );
};

export default ProjectPage;
