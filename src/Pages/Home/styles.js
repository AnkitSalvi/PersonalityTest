import styled from 'styled-components'
import  Button  from "@mui/material/Button";
import  Paper  from "@mui/material/Paper";
import PersonalityImage from '../../Assets/PersonalityImage.png'



export const BodyContainer = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70vw;
    margin: auto;
    padding-bottom:3%;
    margin-bottom: 5%;
    align-items: center;
    box-shadow: 1px 1px 14px #989898 !important;
    border-radius: 50px !important;
    margin-top: 5%;
`;

export const BodyContainerQuestion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    margin: auto;
    margin-top: 5%;

`;

export const StyledButton = styled(Button)`
    width: 30%;
    border-radius: 10px !important;
    background: gray !important;
`; 

export const StyledErrorText = styled.div`
    color: red;
    margin-bottom: 1%;
    margin-top: 2%;
`;