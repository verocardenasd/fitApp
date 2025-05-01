import axios from "axios";

export default axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com/",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "e8d5556177msh6be53b6f94ab1d7p1204bbjsncd2215ab043d",
  },
});
