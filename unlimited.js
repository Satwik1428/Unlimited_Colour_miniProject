//generating random colour
function randColour(){
    const hex = "0123456789ABCDEF";
    let selected = '#';
    for(let i = 0; i < 6; i++)
    {
        selected = selected + hex[Math.floor(Math.random() * 16)];

    }
    return selected;
}
let interval;

//we have generated random colours
//now we have to give functionality to start and stop buttons
function startTimer(){
    const changeBg = document.querySelector('#start');
    changeBg.addEventListener('click', function(){
        if(interval) return; //to prevent multiple intervals
        interval = setInterval(function(){
            document.body.style.backgroundColor = randColour();
        }, 1000);
    });
}

//now to stop the timer
function stopTimer(){
    const stopBg = document.querySelector('#stop');
    stopBg.addEventListener('click', function(){
        clearInterval(interval);
        interval = null;
    });
}
startTimer();
stopTimer();