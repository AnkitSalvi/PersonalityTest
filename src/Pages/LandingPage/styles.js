import styled from 'styled-components'
import PersonalityImage from '../../Assets/PersonalityImage.png'
import  Paper  from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import  Button  from "@mui/material/Button";


export const BodyContainerQuestions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40vw;
    margin: auto;

    /* background-image: url(${PersonalityImage}); */
    background: linear-gradient(360deg, #000000 1.79%, rgba(0, 0, 0, 0) 83.74%), url(${PersonalityImage});
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

export const StyledContent = styled(Paper)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    height: 20vh;
    border-radius: 20px;
    margin: auto;
    padding: 5%;
    box-shadow: 1px 1px 14px #989898 !important;
    border-radius: 50px !important;
`; 

export const StyledButton = styled(Button)`
    height: 50%;
`; 

export const StyledTextField = styled(TextField)`
    border-radius: 10px !important;
    margin-bottom: 10% !important;
`; 

export const StyledText = styled.div`
    font-size:1.2rem;
    margin-bottom: 15%;
    text-align: center;
`; 