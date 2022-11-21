import axios from "axios";
const session_id = localStorage.getItem("session");

export const inst = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  params: {
    api_key: "b95a7fc4250464efe06a40de8eb8d279",
    ...(session_id && { session_id }),
  },
});

window.inst = inst;
