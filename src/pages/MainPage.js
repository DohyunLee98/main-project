import Header from "../components/common/Header";
import Project from "../components/main/project/Project";
import Schedule from "../components/main/schedule/Schedule";
import Statistics from "../components/main/statistics/statistics";
import "../styles/MainPage.css";

const MainPage = () => {
  return (
    <div>
      <div className="main-page-container">
        <div className="header-project-spacing">
          <Header />
        </div>
        <div className="main-section project-section">
          <Project />
        </div>
        <div className="main-section schedule-section">
          <Schedule />
        </div>
        <div className="main-section statistics-section">
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
