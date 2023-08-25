let output = document.getElementById('output');
let btn = document.getElementById('btn');

let number=[Math.floor(Math.random()*100)];

btn.addEventListener('click',function(){
    let input=document.getElementById('txt').value;
    if(input===''){
        alert("Invalid Entry!!!")
    }
    else if(input==number){
        output.innerHTML="Congratulations!! You Guessed it right!!"
    }
    else if(input<number){
        output.innerHTML="Guess a big number:)"
    }
    else{
        output.innerHTML="Guess a small number:)"
    }
});