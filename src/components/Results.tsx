import styled from "styled-components";
import { Card } from "./Card";
import { JokeType } from "../ts/types";

interface ResultsType {
    data: JokeType[];
}

const ResultsStyled = styled.div`
    margin-top: 6.25rem;
    display: grid;
    gap: 1.25rem;
    max-width: 99.75rem;
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(6, 1fr);
        .cell {
            grid-column: span 3;
            &:nth-child(n + 3) {
                grid-column: span 2;
            }
        }
    }
`;

const Results = ({ data }: ResultsType) => {
    // console.log(jokes);
    const cards = data.map((joke, index) => {
        return index < 2 ? (
            <div key={index} className="cell">
                <Card data={joke} $heading={true} />
            </div>
        ) : (
            <div key={index} className="cell">
                <Card data={joke} $heading={false} />
            </div>
        );
    });

    return <ResultsStyled>{cards}</ResultsStyled>;
};

export default Results;
