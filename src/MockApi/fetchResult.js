export const fetchResults = (answers) => {
    let weights = [1,1,1,1,1];

    answers.map((element, index) => {
        answers[index] = element*weights[index];
    })

    let score = answers.reduce(function(acc, curr){
            acc=(acc+curr);
            console.log("acc:", acc)
            return acc;
    }, 0)

    console.log(Math.floor(score/answers.length));
    return (Math.floor(score/answers.length));
}