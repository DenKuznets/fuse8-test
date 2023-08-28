import axios from "axios";

export function getJokes() {
    return axios.get("http://localhost:3000/jokes/");
}

export function getApiJokes(searchQuery: string) {
    return axios.get(
        `https://api.chucknorris.io/jokes/search?query=${searchQuery}`
    );
}
