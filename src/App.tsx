import GlobalStyle from "./ts/globalStyle";
import Container from "./components/Container";
import Results from "./components/Results";
import Search from "./components/Search";
import { useQuery } from "@tanstack/react-query";
import { getApiJokes } from "./ts/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { setJokesNumber } from "./appSlice";

function App() {
    const searchTimeOut = 1000;
    const searchQuery = useSelector((state: RootState) => state.app.value);
    const [filter, setFilter] = useState("");
    const { isError, data, error, isInitialLoading } = useQuery({
        queryKey: ["jokes", filter],
        queryFn: () => getApiJokes(filter),
        enabled: filter.length > 3, //достаточно проверить наличие фильтра
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            if (searchQuery.length > 3) setFilter(searchQuery);
        }, searchTimeOut);
        return () => clearTimeout(delaySearch);
    }, [searchQuery]);

    if (data) dispatch(setJokesNumber(data.data.result.length));
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
