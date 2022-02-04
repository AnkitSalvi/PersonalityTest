import styled from 'styled-components'
import  Paper  from "@mui/material/Paper";




export const StyledContainer = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70vw;
    margin: auto;
    margin-top: 5%;
    padding-bottom:3%;
    margin-bottom: 5%;
    align-items: center;
    box-shadow: 1px 1px 14px #989898 !important;
    border-radius: 50px !important;

`;

export const StyledSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    margin: auto;
    margin-top: 5%;

`;

export const StyledTitle = styled.div`
    font-size: 2rem;
    margin-bottom: 5%;

`;

export const StyledDescription = styled.div`
    font-size: 1.5rem;
    margin-top: 10%;
    margin-bottom: 7%;
`;
