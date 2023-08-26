import { styled } from "styled-components";

const InputStyled = styled.input`
    border: none;
    filter: drop-shadow(0px 7px 12px rgba(100, 100, 111, 0.2));
    font-family: Fira Sans;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 1.19rem 1.88rem;
    color: #656ec2;
    margin-top: 8rem;
    min-width: 0;
    &::placeholder {
        color: #656ec27c;
    }
    &:focus {
        outline: 1px solid #8f94c036;
    }
`;

const Input = () => {
    return <InputStyled type="text" placeholder="Search jokes..." />;
};

export default Input;
