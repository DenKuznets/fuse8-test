import styled from "styled-components"
import Card from "./Card"

const ResultsStyled = styled.div`
    margin-top: 6.25rem;
`

const Results = () => {
  return (
      <ResultsStyled>
          <Card />
    </ResultsStyled>
  )
}

export default Results