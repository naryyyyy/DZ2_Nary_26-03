const emailInput = document.querySelector("#email-input");
const emailCheck = document.querySelector("#email-check");
const emailResult = document.querySelector(".email-result");


const regExp=/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/
  emailCheck.onclick=()=>{
    if(regExp.test(emailInput.value)){
        emailResult.innerHTML='ok'
        emailResult.style.color='green'
    } else{
        emailResult.innerHTML=' not ok'  
        emailResult.style.color='red'
    }
  }


const box=document.querySelector("#smallblock")
let positionX=0
let positionY=0
let positionXEnd=448
let positionYEnd=448
const move=()=>{
    if(positionX <= 448){
        positionX++
        box.style.left=`${positionX}px`
        setTimeout(move, 1)}
        else if(positionY<=448 && positionX>=448){
            positionY++
            box.style.top=`${positionY}px`
            setTimeout(move, 1)  
        }
        else if(
            positionXEnd>0){
                positionXEnd--
                box.style.left=`${positionXEnd}px`
                setTimeout(move, 1)
            }
        else if(
            positionYEnd>0){
            positionYEnd--
            box.style.top=`${positionYEnd}px`
            setTimeout(move, 1)
                }
}
move()

const counter = document.createElement('div');
counter.textContent = '0';
document.body.appendChild(counter);

const startBtn = document.createElement('button');
startBtn.textContent = 'Start';
document.body.appendChild(startBtn);

const stopBtn = document.createElement('button');
stopBtn.textContent = 'Stop';
document.body.appendChild(stopBtn);

const resumeBtn = document.createElement('button');
resumeBtn.textContent = 'Resume';
document.body.appendChild(resumeBtn);

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
document.body.appendChild(clearBtn);

let count = 0;
let intervalId;

function startCount() {
  intervalId = setInterval(() => {
    count++;
    counter.textContent = count;
  }, 1000);
}

function stopCount() {
  clearInterval(intervalId);
}

function resumeCount() {
  intervalId = setInterval(() => {
    count++;
    counter.textContent = count;
  }, 1000);
}

function clearCount() {
  count = 0;
  counter.textContent = count;
}

startBtn.addEventListener('click', startCount);
stopBtn.addEventListener('click', stopCount);
resumeBtn.addEventListener('click', resumeCount);
clearBtn.addEventListener('click', clearCount);