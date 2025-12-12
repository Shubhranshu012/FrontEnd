let startButton = document.getElementById('button');
let main=document.getElementById('main');
let quiz = document.getElementById('quiz');  
let currentIndex = 0;
let questions = [];
let correct=0;
async function fetching() {
    let temp = await fetch("https://opentdb.com/api.php?amount=10");
    let y = await temp.json();
    return y;
}

function checkAnswer(button, answer) {
    if (button.innerText === answer) {
        console.log("Correct Answer");
    } else {
        console.log("Wrong Answer");
    }
}

function showQuestion(index) {
    quiz.innerHTML = "";

    let curr = questions[index];
    let newDiv = document.createElement('div'); 
    newDiv.innerHTML = `<h3>${curr.question}</h3>`;

    let allAnswers = [...curr.incorrect_answers, curr.correct_answer];
    allAnswers.sort(() => Math.random() - 0.5);
    allAnswers.forEach((ans) => {
        let btn = document.createElement('button');
        btn.classList.add("option");
        btn.innerText = ans;

        btn.addEventListener('click', () => {
            checkAnswer(btn, curr.correct_answer);

            if (ans === curr.correct_answer) {
                correct++;
                console.log(correct);
            }
            currentIndex++;
            if (currentIndex < questions.length) {
                showQuestion(currentIndex);
            } else {
                quiz.innerHTML = "<h2>Quiz Finished!</h2>";
            }
        });

        newDiv.appendChild(btn);
    });

    quiz.appendChild(newDiv);
}

startButton.addEventListener('click', async () => {
    let data = await fetching();
    main.innerHTML='';
    main.style.display='none';
    quiz.classList.add('active');
    questions = data.results;
    currentIndex = 0;
    showQuestion(currentIndex);
});
