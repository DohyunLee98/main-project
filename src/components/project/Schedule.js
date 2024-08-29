import GanttChart from "../common/Gantt";
import Kanban from "./Kanban";

const Schedule = () => {
  return (
    <div>
      <Kanban />
      <GanttChart />
    </div>
  );
};

export default Schedule;
