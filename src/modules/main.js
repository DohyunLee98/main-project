import axios from "axios";

export const requestNewProject = async () => {
  // 새 프로젝트 생성시 요청
  try {
    const response = await axios.post("http://localhost:8080/projects");
    if (!response.ok) {
      throw new Error("요청에 대한 응답실패");
    }
    const data = await response.json();
    // 서버로부터 받은 데이터를 처리하는 부분
    console.log(data);
    return data;
  } catch (error) {
    // 에러 처리
    console.error("파일 생성 실패", error);
  }
};

export const requestProjects = async () => {
  // 페이지 로드시 프로젝트 목록 조회
  try {
    const response = await axios.get("http://localhost:8080/projects");
    console.log(JSON.stringify(response.data, null, 2));
    return response.data; // 완료된 비동기 요청 리턴
  } catch (error) {
    console.error("프로젝트 데이터 불러오기 실패", error);
    return null;
  }
};

export const requestAllTask = async () => {
  // 특정 프로젝트에 속한 모든 Task 목록 조회
  try {
    const response = await axios.get(
      "http://localhost:8080/projects/{projectId}/tasks"
    );
    return response.data; // 완료된 비동기 요청 리턴
  } catch (error) {
    console.error("프로젝트 데이터 불러오기 실패", error);
    return null;
  }
};
