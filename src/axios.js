import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//instance.get('/foo-bar')

export default instance;
// you can only have one default export, but many export (non default) in one file
