import axios from "axios";

export const requestNewProject = async () => {
  try {
    const response = await axios.post("http://localhost:8080/project");

    // HTTP 상태 코드가 200 범위가 아니면 오류를 발생시킴
    if (response.status < 200 || response.status >= 300) {
      throw new Error("요청에 대한 응답 실패");
    }

    const data = response.data; // axios는 자동으로 JSON을 파싱하여 반환
    console.log(data);
    return data;
  } catch (error) {
    console.error("파일 생성 실패", error);
    return null;
  }
};

export const requestProjects = async () => {
  // 페이지 로드시 프로젝트 리스트 요청
  try {
    const response = await axios("http://localhost:8080/project"); // 비도익 요청 완료시까지 기다림
    console.log(JSON.stringify(response.data, null, 2));
    return response.data; // 완료된 비동기 요청 리턴
  } catch (error) {
    console.error("프로젝트 데이터 불러오기 실패", error);
    return null;
  }
};
