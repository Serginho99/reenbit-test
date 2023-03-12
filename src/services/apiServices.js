import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export async function getCharacters() {
  try {
    const res = await axios.get("/character");
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCharacterById(id) {
  try {
    const res = await axios.get(`/character/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
