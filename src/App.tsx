import { useState } from "react";
import GlobalStyle from "./ts/globalStyle";
import Container from "./components/Container";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <GlobalStyle />
            <Container>
                <Search />
                <Results />
            </Container>
        </>
    );
}

export default App;
