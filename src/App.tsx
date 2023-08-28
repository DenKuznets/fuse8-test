import GlobalStyle from "./ts/globalStyle";
import Container from "./components/Container";
import Results from "./components/Results";
import Search from "./components/Search";
import { useQuery } from "@tanstack/react-query";
import { getJokes } from "./ts/api";



function App() {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["jokes"],
        queryFn: getJokes,
    });

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError && error instanceof Error) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <>
            <GlobalStyle />
            <Container>
                <Search />
                {data && <Results data={data.data} />}
            </Container>
        </>
    );
}

export default App;
