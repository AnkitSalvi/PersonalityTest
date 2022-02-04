import React, { useState, useContext } from "react";
import * as Styles from './styles'
import Header from '../../Components/Header/index';
import { useNavigate } from "react-router-dom";
import {UserDataContext} from '../../Context/context'



export default function LandingPage() {

    const {setUserName} = useContext(UserDataContext);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/test')
    }

	return (
		<div>
            <Header page={"landing"}></Header>
            <Styles.BodyContainerQuestions>
                <Styles.StyledContent>
                <Styles.StyledText>Please Enter Your Name</Styles.StyledText>
                <Styles.StyledTextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>setUserName(e.target.value)} />
                <Styles.StyledButton variant="contained" onClick={handleClick}> Start Test</Styles.StyledButton>
                </Styles.StyledContent>
            </Styles.BodyContainerQuestions>
		</div>
	);
}
