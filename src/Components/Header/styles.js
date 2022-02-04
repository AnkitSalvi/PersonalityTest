import styled from 'styled-components'
import  Button  from "@mui/material/Button";



export const StyledContainer = styled.div`
    background-color: #0099cc;
    height: 6vh;
    padding: 0.7%;
    box-shadow: 0 1px 4px rgb(29 36 50 / 20%);  //h-offset v-offset blur color
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const StyledImage = styled.img`
    height: 100%;
    width: auto;
    margin-left:2%;
`;


export const StyledButton = styled(Button)`
    height: 40%;
    color: black !important;
    background: cornsilk !important;
`;

export const StyledRightContainer = styled.div`
    display: flex;
    width: 10%;
    justify-content: space-around;


    @media only screen and (min-width: 1400px) and (max-width:1900px){
        width:13%;
    }
`;

export const StyledText = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.1rem;
`;
