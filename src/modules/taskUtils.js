import axios from "axios";

// Task와 관련된 Todo를 로드하는 함수
export const fetchTaskWithTodos = async (taskId) => {
  try {
    const response = await axios.get(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Task 데이터 불러오기 실패", error);
    return null;
  }
};

// Task를 추가하는 함수
export const addTask = async (taskData) => {
  try {
    const response = await axios.post(`/tasks`, taskData);
    return response.data;
  } catch (error) {
    console.error("Task 추가 실패", error);
    return null;
  }
};

// Task에 Todo를 추가하는 함수
export const addTodoToTask = async (taskId, todoData) => {
  try {
    const response = await axios.post(`/tasks/${taskId}/todos`, todoData);
    return response.data;
  } catch (error) {
    console.error("Todo 추가 실패", error);
    return null;
  }
};
