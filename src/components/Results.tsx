import styled from "styled-components"
import { Card } from "./Card"

const ResultsStyled = styled.div`
    margin-top: 6.25rem;
    /* display: grid; */
`

const Results = () => {
  return (
      <ResultsStyled>
          <Card $heading={true} />
          <Card $heading={false} />
    </ResultsStyled>
  )
}

export default Results