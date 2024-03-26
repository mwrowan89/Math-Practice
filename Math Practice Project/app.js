let display;


let multiplicationArr = ['2 * 6', '4 * 7', '6 * 7', '2 * 5','9 * 7','3 * 6',
                '7 * 7','1 * 9','4 * 3','5 * 8','4 * 0','9 * 9'];

let additionArr = ['2 + 6', '4 + 7', '6 + 7', '2 + 5','9 + 7','3 + 6',
                '7 + 7','1 + 9','4 + 3','5 + 8','4 + 0','9 + 9'];

let subtractionArr = ['6 - 2', '7 - 4', '6 - 7', '5 - 2','9 - 7','6 - 3',
                '7 - 7','9 - 2','4 - 3','8 - 5','4 - 4','9 - 6'];

let divisionArr =  ['2 / 6', '4 / 7', '6 / 7', '2 / 5','9 / 7','3 / 6',
                '7 / 7','1 / 9','4 / 3','5 / 8','4 / 0','9 / 9'];

//do not add these #'s to wrong answer list: 12,28,42,10,63,18,49,9,40,0,81
let wrongAnswerArr = [
    13,45,22,41,55,20,26,24,32,11,
    19,43,76,86,71,53,48,53,26,77,14,80,7,46,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
]



document.addEventListener('DOMContentLoaded', () => {


    showPromptBasedOnURL();

    //Display Nav other options
    const nav = document.querySelector('nav');
    nav.addEventListener('click', () => {
        const option = document.querySelectorAll('.options');
        option.forEach((option) => {
            option.style.display = 'block';
        });
    });
    const navLeave = document.querySelector('nav');
    navLeave.addEventListener('dblclick', () => {
        const option = document.querySelectorAll('.options');
        option.forEach((option) => {
            option.style.display = 'none';
        });
    });    

    const selection = document.querySelectorAll('li');
    selection.forEach((choice) => {
        choice.addEventListener('click', () => {

                let correctChoice = document.querySelector('li.correct');
                if (choice === correctChoice){
                    scoreCounter();
                }
                showPromptBasedOnURL();// Generate a new problem
    
                problemCounter();// change question count
                
            });
    })
    

    const btnStartOver = document.getElementById('btnStartOver');
    btnStartOver.addEventListener('click', () => {
        

        window.location.href = 'index.html';
        
        //startOver();// Reset the problem. // Reset the score.
        
        
        
    });

});

function showPromptBasedOnURL() {

    const path = window.location.pathname;

    // Check the path and call the corresponding function
    if (path.includes("division.html")) {
        showDivisionPrompt();
    } else if (path.includes("multiplication.html")) {
        showMultiplicationPrompt();
    } else if (path.includes("addition.html")) {
        showAdditionPrompt();
    } else if (path.includes("subtraction.html")) {
        showSubtractionPrompt();
    } else {
        // Handle other URLs or no match
        console.log("No matching URL.");
    }
}


function showMultiplicationPrompt() {

   
    //Shows the question prompt 
    let newQuestion = document.getElementById('multiplicationPrompt');
    let randomQuestionPrompt = pickRandomQuestion(multiplicationArr);
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

function showDivisionPrompt() {

   
    //Shows the question prompt 
    let newQuestion = document.getElementById('divisionPrompt');
    let randomQuestionPrompt = pickRandomQuestion(divisionArr);
    newQuestion.textContent = randomQuestionPrompt;
    

    //Takes the random question and evaluates the question for value.
    let value = randomQuestionPrompt.split(" ");
    let firstNum = parseInt(value[0]);
    let operator = value[1];
    let secondNum = parseInt(value[2]);
    //result of question prompt
    let result = firstNum / secondNum;
    let roundedResult = result.toFixed(2);


    //Ensures the li tag that has correct answer is never in the same spot
    
    let list = document.querySelector('#answers ul');
    let totalElements = list.children.length;
    let randomLi = Math.floor(Math.random() * totalElements);
    let correctAnswer = list.children[randomLi];

    correctAnswer.textContent = roundedResult;
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

function showAdditionPrompt() {

   
    //Shows the question prompt 
    let newQuestion = document.getElementById('additionPrompt');
    let randomQuestionPrompt = pickRandomQuestion(additionArr);
    newQuestion.textContent = randomQuestionPrompt;
    

    //Takes the random question and evaluates the question for value.
    let value = randomQuestionPrompt.split(" ");
    let firstNum = parseInt(value[0]);
    let operator = value[1];
    let secondNum = parseInt(value[2]);
    //result of question prompt
    let result = firstNum + secondNum;


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

function showSubtractionPrompt() {

   
    //Shows the question prompt 
    let newQuestion = document.getElementById('subtractionPrompt');
    let randomQuestionPrompt = pickRandomQuestion(subtractionArr);
    newQuestion.textContent = randomQuestionPrompt;
    

    //Takes the random question and evaluates the question for value.
    let value = randomQuestionPrompt.split(" ");
    let firstNum = parseInt(value[0]);
    let operator = value[1];
    let secondNum = parseInt(value[2]);
    //result of question prompt
    let result = firstNum - secondNum;


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
        alert('Congratulations')
    }
}

function scoreCounter(){
    let currentScore = document.querySelector('.currentScore');
    let score = parseInt(currentScore.textContent);
    let newScore = (score + 10);
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