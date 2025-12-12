let x = document.getElementById('button'); 

async function fetching() {
    let temp = await fetch("https://opentdb.com/api.php?amount=10");
    let y = await temp.json();
    return y;
}
function checkAnswer(button, answer) {
    if(button.innerHTML==answer){
        console.log("Correct Answer");
    }else{
        console.log("Wrong Answer");
    }
}
x.addEventListener('click', async () => {
    console.log("Clicked");
    let main = document.getElementById('main');
    main.style.display = 'none';

    let data = await fetching();
    console.log(data.results);

    data.results.forEach((curr) => {
        let newDiv = document.createElement('div'); 
        newDiv.innerHTML = `<h3>${curr.question}</h3>`;
        curr.incorrect_answers.forEach((ans) => {
            let btn = document.createElement('button');
            btn.innerText = ans;
            btn.addEventListener('click', () => checkAnswer(btn, curr.correct_answer));
            newDiv.appendChild(btn);
        });
        let correctBtn = document.createElement('button');
        correctBtn.innerText = curr.correct_answer;
        correctBtn.addEventListener('click', () => checkAnswer(correctBtn, curr.correct_answer));
        newDiv.appendChild(correctBtn);

        document.body.appendChild(newDiv);
    });
});
