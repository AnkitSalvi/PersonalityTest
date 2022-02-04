import React, { useState, useEffect } from "react";
import * as Styles from './styles'

import QuestionComponent from '../../Components/QuestionComponent/index'
import Header from '../../Components/Header/index';
import {fetchResults} from '../../MockApi/fetchResult'
import Results from '../../Components/Results/index'
import {Questions} from '../../StaticData/questions'

export default function Home() {

    const count = [1, 2, 3, 4, 5];
    const [answers, setAnswers] = useState([0,0,0,0,0])
    const [score, setScore] = useState(0)
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
    
    
    const isValid = () => {

        let areAllRadioSelected = true;
        answers.forEach((answer)=>{
            if(answer==0)
            {
                areAllRadioSelected = false;
            }
            
        })

        return areAllRadioSelected
    }

    const handleSubmit = () => {
        if(isValid()){
            console.log("isValid true")
            let result = fetchResults(answers)
            setScore(result);
        }else{
            setHelperText('All the answers required');
            setError(true);
        }
    }

	return (
		<div>
            <Header page = {score?"result":""}></Header>
            <Styles.BodyContainer>
                {score
                ?<Results score={score}/>
                :
                <>
                <Styles.BodyContainerQuestion>
                {Questions.map((element,index) => {
                        return (
                        <QuestionComponent 
                            key={index}
                            answers={answers}
                            setAnswers={setAnswers}
                            questionNumber={index}
                            questionText={element.text}
                            />
                            
                        )
                        
                    })
                }
                </Styles.BodyContainerQuestion>

                {error &&
                    <Styles.StyledErrorText>{helperText}</Styles.StyledErrorText> 
                }
          
                <Styles.StyledButton onClick={handleSubmit} variant="contained">Get Results</Styles.StyledButton> 
                </>

                }

            </Styles.BodyContainer>
		</div>
	);
}
