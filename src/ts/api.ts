import axios from "axios";

export function getJokes() {
    return axios.get("http://localhost:3000/jokes/");
}

// export function getApiJokes() {
//     return axios.get()
// }