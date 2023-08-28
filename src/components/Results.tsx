import styled from "styled-components";
import { Card } from "./Card";

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

const cards: JSX.Element[] = [];

for (let index = 0; index < 12; index++) {
    if (index < 2) {
        cards.push(
            <div key={index} className="cell">
                <Card $heading={true} />
            </div>
        );
    } else
        cards.push(
            <div key={index} className="cell">
                <Card $heading={false} />
            </div>
        );
}

const Results = () => {
    return <ResultsStyled>{cards}</ResultsStyled>;
};

export default Results;
