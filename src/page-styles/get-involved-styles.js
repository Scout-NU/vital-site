import styled from "styled-components"
import { devices } from "../constants/devices"

const PositionCardsContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  @media ${devices.tabletMax} {
    display: block;
    align-content: center;
  }
`

export { PositionCardsContainer }