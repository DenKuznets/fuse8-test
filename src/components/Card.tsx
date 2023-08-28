import styled from "styled-components";
import { JokeType } from "../ts/types";

interface Props {
    $heading: boolean;
    data?: JokeType;
}

const CardStyled = styled.div`
    height: 100%;
    padding: 1rem;
    box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-width: 1024px) {
        padding: 2.5rem;
    }
`;

const Joke = styled.div<Props>`
    margin-bottom: 3.75rem;
    color: #282626;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
    font-size: ${({ $heading }) => ($heading ? "1.25rem" : "1rem")};
`;

const Footer = styled.div`
    color: #767676;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1.5rem;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Card = ({ $heading, data }: Props) => {
    return data ? (
        <CardStyled>
            <Joke $heading={$heading}>{data.value}</Joke>
            <Footer>
                <div className="id">{data.id}</div>
                <div className="date">{data.created_at.split(" ")[0]}</div>
            </Footer>
        </CardStyled>
    ) : (
        <CardStyled>Loading...</CardStyled>
    );
};
