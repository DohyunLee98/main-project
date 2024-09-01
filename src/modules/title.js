import axios from "axios";

export const requestUpdate = async ({ projectId, updatedData }) => {
  try {
    console.log(updatedData);
    const response = await axios.put(
      `http://localhost:8080/project/${projectId}`,
      updatedData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("업데이트된 프로젝트:", response.data);
  } catch (error) {
    console.error("업데이트 중 오류 발생:", error);
  }
};
