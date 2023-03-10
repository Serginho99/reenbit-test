import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export async function getСharacters() {
  try {
    const res = await axios.get("/character");
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
}
