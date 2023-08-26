import { useState } from "react";
import GlobalStyle from "./ts/globalStyle";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <GlobalStyle />
            <Container>
                <Input />
            </Container>
        </>
    );
}

export default App;
