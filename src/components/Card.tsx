import styled from "styled-components";

interface Props {
    $heading: boolean;
}

const CardStyled = styled.div`
    padding: 1rem;
    box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
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
    flex-direction: column;
    row-gap: 1.5rem;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Card = ({ $heading }: Props) => {
    return (
        <CardStyled>
            <Joke $heading={$heading}>
                The single most successful anti-smoking measure was a commercial
                in the 1980's. In the commercial, there is a man smoking a
                cigarette. A voice then exclaims "Smoking will kill you."
                Nothing happens, until Chuck Norris blasts through the wall and
                kills the man with a single round house kick.
            </Joke>
            <Footer>
                <div className="id">asdasdasdasdasd1231312</div>
                <div className="date">24.05.2113</div>
            </Footer>
        </CardStyled>
    );
};
