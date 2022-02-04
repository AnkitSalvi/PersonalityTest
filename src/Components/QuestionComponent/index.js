import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import * as Styles from './styles'

export default function QuestionComponent(props) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {    
        setSelectedValue(parseInt(event.target.value));
        let temp = [...props.answers];
        temp[props.questionNumber] = parseInt(event.target.value);
        props.setAnswers(temp);
    };

    return (
        <Styles.StyledContainer>
        <Styles.StyledQuestion>{props.questionText}</Styles.StyledQuestion>
        <Styles.StyledResponse>
          
            <Styles.StyledText>Agree</Styles.StyledText>   
            <Radio
                checked={selectedValue === 1}
                value={1}
                onChange={handleChange}
                required={true}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 56,
                    },
                    '&, &.Mui-checked': {
                        color: '#33a474',
                      },
              
                }}
            />
            <Radio
                checked={selectedValue === 2}
                value={2}
                onChange={handleChange}
                required={true}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 40,
                    },
                    '&, &.Mui-checked': {
                        color: '#33a474',
                      },
                    
                }}
            />

            <Radio
                checked={selectedValue === 3} 
                value={3}
                onChange={handleChange}
                required={true}
                sx={{
                    '&, &.Mui-checked': {
                        color: 'grey',
                      },
                    
                }}
                
            />


            <Radio
                checked={selectedValue === 4}
                value={4}
                onChange={handleChange}
                required={true}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 40,
                    },
                    '&, &.Mui-checked': {
                        color: '#88619a',
                      },
                }}
            />
            <Radio
                checked={selectedValue === 5}
                value={5}
                onChange={handleChange}
                required={true}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 56,
                    },
                    '&, &.Mui-checked': {
                        color: '#88619a',
                      },
                }}
            />

            <Styles.StyledText>Disagree</Styles.StyledText>   
        </Styles.StyledResponse>
        <Styles.StyledBorderLine></Styles.StyledBorderLine>
        </Styles.StyledContainer>
    );
}