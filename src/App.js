import { Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/main/*" element={<MainPage />}></Route>
      <Route path="/:id/*" element={<ProjectPage />}></Route>
    </Routes>
  );
}

export default App;
