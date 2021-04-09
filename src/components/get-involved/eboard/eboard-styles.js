import styled from "styled-components"
import { size } from "../../../constants/devices"
import { Button } from "../../../constants/buttons"

const EboardContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  padding: 10px 75px;
  @media (max-width: ${size.tablet}px) {
    display: block;
    padding: 10px 35px;
  }
`

const TextContainer = styled.div`
  width: 50%;
  padding-right: 40px;
  @media (max-width: ${size.tablet}px) {
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  width: 50%;
`

const ButtonPosition = styled.div`
  position: relative;
`

const EboardButton = styled(Button)`
  position: absolute;
  transform: translateY(85%);
  right: 18%;
  padding: 16px 42px;
`

export {
  EboardContainer,
  TextContainer,
  ButtonContainer,
  ButtonPosition,
  EboardButton,
}