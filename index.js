let points = 0;

function score(){
    points++;
}

let submit = document.getElementById('submit')
submit.addEventListener('click',displayScore)

function displayScore(){
    console.log(points)
}
