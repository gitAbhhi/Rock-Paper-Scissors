let user=0;
let computer=0
let rock=document.querySelector(".b1");
let paper=document.querySelector(".b2");
let scissors=document.querySelector(".b3");
let drawcase=document.querySelector(".draw");
let usercount=document.querySelector(".usercount");
let comcount=document.querySelector(".comcount")
const choice=[rock,paper,scissors];

const computerchoice=()=>{
    let rindex=Math.floor(Math.random()*3);
    return choice[rindex];
}

const winner=(los)=>{
    drawcase.innerText="win comp choose "+los.innerText;
    drawcase.classList.add('winner');
    drawcase.classList.remove("hide");
    usercount.innerText=++user;
    
}
const lose =(los)=>{
    drawcase.innerText="lose comp choose "+los.innerText;
    drawcase.classList.add('lose');
    drawcase.classList.remove("hide");
    comcount.innerText=++computer;
}
const draw =(dra)=>{
    drawcase.innerText="draw com choose "+dra.innerText;
    drawcase.classList.add('draw');
    drawcase.classList.remove("hide");
}
const reset=()=>{
    drawcase.classList.add("hide");
    drawcase.classList.remove("winner");
    drawcase.classList.remove("lose");
    drawcase.classList.remove("draw");
}

function playgame(userop) {
    const comchoose=computerchoice();
    console.log("computer"+comchoose.innerText);
    if(userop==comchoose){
        draw(comchoose);
    }
    else if(userop==rock){
        if(comchoose==paper){
            lose(comchoose);
        }
        else{
            winner(comchoose);
        }
    }
    else if(userop==paper){
        if(comchoose==scissors){
            lose(comchoose);
        }
        else{
            winner(comchoose);
        }
    }
    else if(userop==scissors){
        if(comchoose==rock){
            lose(comchoose);
        }
        else{
            winner(comchoose);
        }
    }
    
}
choice.forEach(userop => {
    console.log(userop);
    userop.addEventListener("click", ()=>{
        console.log(userop);
        reset();
        console.log(userop.innerText);
        playgame(userop);
    })
});
