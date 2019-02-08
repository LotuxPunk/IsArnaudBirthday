const day = 8;
const month = 1;

window.onload = () => {
    let answer = document.getElementById("answer");
    let date = new Date(Date.now());
    if (date.getMonth() == month && date.getDate() == day){
        changeAnswer(answer, "Yes");
    }
    else{
        changeAnswer(answer, "No");
    }
}

function changeAnswer(answer, text){
    answer.innerHTML = text;
    answer.dataset.text = text;
}