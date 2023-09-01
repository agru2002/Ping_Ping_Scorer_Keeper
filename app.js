const p1Button=document.querySelector("#p1Score")
const p2Button=document.querySelector("#p2Score")
const p1Score=document.querySelector('#p1Display')
const p2Score=document.querySelector('#p2Display')
const resetBtn=document.querySelector('#reset')
const playToSelect=document.querySelector("#playTo")
const body=document.querySelector('body')
body.style.backgroundColor="rgb(10,30,0)"


let p1=0;
let p2=0;
let winningScore=Number.parseInt(playToSelect.value)
let gameEnd=false;

playToSelect.addEventListener('change', function(){
    // after setting winning score from select we have to reset the all the i.e 0to0 , we cannot start from there onward
   winningScore=Number.parseInt(this.value);
   reset()
})

p1Button.addEventListener('click', function(){
    // gameEnd is used for linking both score so that both cannot reach winning Score
    if(!gameEnd)//gameEnd=false is true
   {    
        p1+=1;
        if(p1===winningScore)
        {
            gameEnd=true;
            p1Score.classList.add('has-text-success')
            p2Score.classList.add('has-text-danger')
            p1Button.disabled=true;
            p2Button.disabled=true;

        }
        p1Score.innerText=p1;
   }
    
})
p2Button.addEventListener('click', function(){
    if(!gameEnd)
    {
    // if(p2!==winningScore)
    // {
    p2+=1;
    if(p2===winningScore)
    {
        gameEnd=true;
        p2Score.classList.add('has-text-success')
        p1Score.classList.add('has-text-danger')
        p1Button.disabled=true;
        p2Button.disabled=true;
    }
    p2Score.innerText=p2;
    }
    // }
})
let reset=()=>{
    p1=0
    p2=0
    gameEnd=false
    p1Score.innerText=0
    p2Score.innerText=0
    p2Score.classList.remove('has-text-success', 'has-text-danger')
    p1Score.classList.remove('has-text-success', 'has-text-danger')
    p1Button.disabled=false;
    p2Button.disabled=false;
}
resetBtn.addEventListener('click', reset)

