import axios from "axios";

async function requestProjects() {
  try {
    const response = await axios.get("http://localhost:8080/todo/numbers");
    return await response.data;
  } catch (error) {
    return null;
  }
}

export default requestProjects;
