import styled from 'styled-components'


export const StyledResponse = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;


    @media only screen and (min-width: 320px) and (max-width:768px){
        flex-direction: column;
    }
`;

export const StyledContainer = styled.div`
    height: 19vh;


    @media only screen and (min-width: 320px) and (max-width:768px){
        height: 62vh;
    }
`;

export const StyledQuestion = styled.div`
    text-align: center;
    width: 90%;
    margin: auto;
    margin-bottom: 2%;
`;

export const StyledText = styled.div`
   font-size: 1.4rem;
`;

export const StyledBorderLine = styled.div`
   border-bottom: 3px solid #B0B0B0;
   margin-top: 5%;
`;