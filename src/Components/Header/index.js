import React, { useContext } from "react";
import * as Styles from './styles'
import HeaderLgo from '../../Assets/headerLogo.png'
import { useNavigate } from "react-router-dom";
import {UserDataContext} from '../../Context/context'


export default function Header(props) {
    
    const {userName} = useContext(UserDataContext);
    const navigate = useNavigate();

	return (
		<div>
            <Styles.StyledContainer>
               <Styles.StyledImage src={HeaderLgo}/>

               <Styles.StyledRightContainer>
                    
                    {props?.page!=="landing"
                        &&<>
                        <Styles.StyledText>{userName}</Styles.StyledText>
                        <Styles.StyledButton variant="contained" onClick={()=>navigate('/')}>Home</Styles.StyledButton>
                        </>
                    }
                </Styles.StyledRightContainer>
               
            </Styles.StyledContainer>
		</div>
	);
}
