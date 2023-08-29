import axios from "axios";

export function getApiJokes(searchQuery: string) {
    return axios.get(
        `https://api.chucknorris.io/jokes/search?query=${searchQuery}`
    );
}
