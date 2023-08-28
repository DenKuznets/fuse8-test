import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../appSlice";
import { RootState } from "../store";
import { useEffect, useRef } from "react";

const SearchStyled = styled.div`
    /* height: 6rem; */
    position: relative;
    width: 100%;
    max-width: 39rem;
    margin-top: 3rem;
    @media only screen and (min-width: 1024px) {
        margin-top: 8rem;
    }
`;

const Input = styled.input`
    border: none;
    filter: drop-shadow(0px 7px 12px rgba(100, 100, 111, 0.2));
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 1.19rem 2.25rem 1.31rem;
    color: #656ec2;
    min-width: 0;
    width: 100%;
    &::placeholder {
        color: #656ec27c;
    }
    &:focus {
        outline: 1px solid #8f94c036;
    }
`;

const Counter = styled.div`
    padding: 1.19rem 2.25rem;
    color: #282626;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: absolute;
`;

const Search = () => {
    const searchQuery = useSelector((state: RootState) => state.app.value);
    const dispatch = useDispatch();
    // const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;


    // useEffect(() => {
    //     if (inputRef && inputRef.current) {
    //         inputRef.current.focus();
    //     }
    // }, []);

    

    return (
        <SearchStyled>
            <Input
                autoFocus
                // ref={inputRef}
                value={searchQuery}
                type="text"
                placeholder="Search jokes..."
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            <Counter>Found jokes: {"0"}</Counter>
        </SearchStyled>
    );
};

export default Search;
