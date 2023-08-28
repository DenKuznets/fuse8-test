import { styled } from "styled-components";

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

interface ContainerProps {
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    return <ContainerStyled>{props.children}</ContainerStyled>;
};

export default Container;
