let display;

// let questionMap = new Map();
// questionMap.set('2 * 2', 4);
// questionMap.set('4 * 4', 16);
// questionMap.set('6 * 6', 36);
// questionMap.set('5 * 5', 25);
// questionMap.set()
// questionMap.set()
// questionMap.set()
// questionMap.set()
// questionMap.set()

let questionArr = ['2 * 6', '4 * 7', '6 * 7', '2 * 5','9 * 7','3 * 6',
                '7 * 7','1 * 9','4 * 3','5 * 8','4 * 0','9 * 9'];


//do not add these #'s to wrong answer list: 12,28,42,10,63,18,49,9,40,0,81
let wrongAnswerArr = [
    13,45,22,41,55,20,26,24,32,11,
    19,43,76,86,71,53,48,53,26,77,14,80,7,46
]




document.addEventListener('DOMContentLoaded', () => {

    showQuestionPrompt();

    const selection = document.querySelectorAll('li');
    selection.forEach((choice) => {
        choice.addEventListener('click', () => {

                let correctChoice = document.querySelector('li.correct');
                if (choice === correctChoice){
                    scoreCounter();
                }
                showQuestionPrompt();// Generate a new problem
                problemCounter();// change question count
                
                
            });
    })
    

    // const wrongChoice = document.querySelectorAll('.incorrect');
    // wrongChoice.forEach((wrongChoice) => {
    //     wrongChoice.addEventListener('click', () => {

    //             showQuestionPrompt();// Generate a new problem
    //             problemCounter();// change question count
                
                
    //             // update the score

    //         });
    // })
    

    const btnStartOver = document.getElementById('btnStartOver');
    btnStartOver.addEventListener('click', () => {
        

        showQuestionPrompt();// Generate a new problem set.
        clearClasses(); //Removes correct or incorrect class to reset
        startOver();// Reset the problem. // Reset the score.
        
        
        
    });

});


function showQuestionPrompt() {

   
    //Shows the question prompt 
    let newQuestion = document.getElementById('questionPrompt');
    let randomQuestionPrompt = pickRandomQuestion(questionArr);
    newQuestion.textContent = randomQuestionPrompt;
    

    //Takes the random question and evaluates the question for value.
    let value = randomQuestionPrompt.split(" ");
    let firstNum = parseInt(value[0]);
    let operator = value[1];
    let secondNum = parseInt(value[2]);
    //result of question prompt
    let result = firstNum * secondNum;


    //Ensures the li tag that has correct answer is never in the same spot
    
    let list = document.querySelector('#answers ul');
    let totalElements = list.children.length;
    let randomLi = Math.floor(Math.random() * totalElements);
    let correctAnswer = list.children[randomLi];

    correctAnswer.textContent = result;
    correctAnswer.setAttribute('class', 'correct');

    //Generates 3 wrong answers
    let wrongAnswers = document.querySelectorAll('li');
    wrongAnswers.forEach((answer) => {
        if (!answer.classList.contains('correct') || answer.textContent !== correctAnswer.textContent) {
            answer.setAttribute('class', 'incorrect');
            answer.textContent = pickRandomNumber(wrongAnswerArr);
        }
    });

};

function problemCounter(){
    let currentProblem = document.querySelector('.currentProblem');
    let value = parseInt(currentProblem.textContent);
    if(value < 10) {
        let newValue = value + 1;
        currentProblem.textContent = newValue.toString();
    }
    else if (value === 10) {
        showHide();
    }
}

function scoreCounter(){
    let currentScore = document.querySelector('.currentScore');
    let score = parseInt(currentScore.textContent);
    let newScore = score + 10;
    currentScore.textContent = newScore.toString(); 
}


function showHide(){
    let allHide = document.querySelectorAll('.show-hide');
    allHide.forEach(element => {
        element.style.display = 'none';
    });
}

function startOver(){
    let currentProblem = document.querySelector('.currentProblem');
    currentProblem.textContent = 1;
    let currentScore = document.querySelector('.currentScore');
    currentScore.textContent = 0;
    let allHide = document.querySelectorAll('.show-hide');
    allHide.forEach(element => {
        element.style.display = '';
    });

}

function pickRandomNumber(wrongAnswerArr){

    let random = Math.floor(Math.random() * wrongAnswerArr.length);
    return wrongAnswerArr[random];
};

function pickRandomQuestion(questionArr){

    let random = Math.floor(Math.random() * questionArr.length);
    return questionArr[random];
};


function clearClasses() {
    let existingCorrectAnswer = document.querySelector('li.correct');
    
    if (existingCorrectAnswer) {
        existingCorrectAnswer.classList.remove('correct');
    }
    
}