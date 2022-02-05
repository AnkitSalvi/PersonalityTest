export const fetchResults = (answers) => {
    let weights = [1,1,1,1,1];

    answers.map((element, index) => {
        answers[index] = element*weights[index];
    })

    let score = answers.reduce(function(acc, curr){
            acc=(acc+curr);
            return acc;
    }, 0)


    return (Math.floor(score/answers.length));
}