import GlobalStyle from "./ts/globalStyle";
import Container from "./components/Container";
import Results from "./components/Results";
import Search from "./components/Search";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { getJokes, getApiJokes } from "./ts/api";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect, useState } from "react";

function App() {
    const searchTimeOut = 1000;
    const searchQuery = useSelector((state: RootState) => state.app.value);
    const [filter, setFilter] = useState("");
    const { isLoading, isError, data, error, isInitialLoading } = useQuery({
        queryKey: ["jokes", filter],
        queryFn: () => getApiJokes(filter),
        enabled: filter.length > 3,
    });

    useEffect(() => {
        const delaySearch = setTimeout(
            () => setFilter(searchQuery),
            searchTimeOut
        );
        return () => clearTimeout(delaySearch);
    }, [searchQuery]);

    return (
        <>
            <GlobalStyle />
            <Container>
                <Search />

                {/* {isLoading && <span>Loading...</span>} */}
                {/* {isError && error instanceof Error && (
                    <span>Error: {error.message}</span>
                )} */}
                {data && <Results data={data.data.result} />}
            </Container>
        </>
    );
}

export default App;
