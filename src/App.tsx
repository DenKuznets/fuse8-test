import GlobalStyle from "./ts/globalStyle";
import Container from "./components/Container";
import Results from "./components/Results";
import Search from "./components/Search";
import { useQuery } from "@tanstack/react-query";
import { getApiJokes } from "./ts/api";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
    const searchTimeOut = 1000;
    const searchQuery = useSelector((state: RootState) => state.app.value);
    const [filter, setFilter] = useState("");
    const { isError, data, error, isInitialLoading } = useQuery({
        queryKey: ["jokes", filter],
        queryFn: () => getApiJokes(filter),
        enabled: filter.length > 3,
    });

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            if (searchQuery.length > 3) setFilter(searchQuery);
        }, searchTimeOut);
        return () => clearTimeout(delaySearch);
    }, [searchQuery]);

    return (
        <>
            <GlobalStyle />
            <Container>
                <Search />

                {isInitialLoading && (
                    <span style={{ marginTop: "10rem" }}>
                        <ClipLoader
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </span>
                )}
                {isError && error instanceof Error && (
                    <span>Error: {error.message}</span>
                )}
                {data && <Results data={data.data.result} />}
            </Container>
        </>
    );
}

export default App;
