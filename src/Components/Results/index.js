import React from "react";
import * as Styles from './styles'
import {PersonalitytData} from '../../StaticData/personalities'


export default function Results(props) {

    console.log("props.score:", props.score)
	return (
		<div>
                <Styles.StyledSubContainer>
                    <Styles.StyledTitle>{PersonalitytData[props.score - 1].title}</Styles.StyledTitle>
                    <img src={PersonalitytData[props.score - 1].imageURL}></img>
                    <Styles.StyledDescription>{PersonalitytData[props.score - 1].description}</Styles.StyledDescription>
                </Styles.StyledSubContainer>
            
		</div>
	);
}
