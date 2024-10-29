
let guess;
let target = Math.floor(Math.random()*100)+1;
console.log("target", target)

let num = document.getElementById("num");
let go = document.getElementById("go");

let guessLeft = document.getElementById("guessLeft");
guessLeft.innerHTML = 10;

let reset = document.getElementById("reset");

let verdict = document.getElementById("verdict");
go.addEventListener('click', function(){
    guess = parseInt(num.value);
    console.log(guess)
    guessLeft.innerHTML = parseInt(guessLeft.innerHTML) - 1;
    if(guess == target){
        verdict.innerHTML = `Congratulations! You got it right! <br> Attempts taken : ${(10 - guessLeft.innerHTML)}`;
        num.disabled = true; 
    }else if(guess > target){
        verdict.innerHTML = "Your guess is too high!";
    }else{
        verdict.innerHTML = "Your guess is too low!";
    }
    if (parseInt(guessLeft.innerHTML) === 0){
        verdict.innerHTML = `Game Over! The number was ${target}`;
        num.disabled = true;
        reset.style.display = "block";
    }
})


reset.addEventListener('click', function(){
    target = Math.floor(Math.random()*100)+1;
    console.log("target", target)
    guessLeft.innerHTML = 10;
    num.disabled = false;
    num.value = "";
    verdict.innerHTML = "";
    reset.style.display = "none";
})