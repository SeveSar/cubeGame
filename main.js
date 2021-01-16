let $startBtn = document.querySelector('#start');
let $gameArea = document.querySelector('#game');
let counter = document.querySelector("#game-time").value;
let InputTime = document.querySelector("#game-time");
let spanTimeShow = document.querySelector('#time');
let resultH1 = document.querySelector('#result-header');
let resultInnerSpan = resultH1.querySelector('#result');
let numberOfClicks = 0;
InputTime.addEventListener('input', function() {
    spanTimeShow.textContent = `${this.value}`;
    counter = parseInt(this.value);
});
$startBtn.addEventListener('click', () => {
    generateQube()
    let timer = setInterval(function(){
        counter--;
        spanTimeShow.textContent = counter;
        if (counter == 0) {
            clearInterval(timer)
            $gameArea.innerHTML = '';
            $gameArea.style.backgroundColor = "#ccc";
            $startBtn.classList.remove('hide');
            counter = parseInt(document.querySelector("#game-time").value);
            spanTimeShow.textContent = InputTime.value;
            resultH1.classList.remove('hide');
            resultInnerSpan.textContent = numberOfClicks;
            numberOfClicks = 0;
        }
        
       
    }, 1000)
});

function generateQube() {
    $startBtn.classList.add('hide');
    resultH1.classList.add('hide');
    $gameArea.style.backgroundColor = "#fff";
    let divBox = document.createElement('div');
    let colorRand1 = getRandom(0, 256);
    let colorRand2 = getRandom(0, 256);
    let colorRand3 = getRandom(0, 256);
    let boxSize = getRandom(20,100);
    let maxTop = $gameArea.offsetHeight - boxSize;
    let maxLeft = $gameArea.offsetHeight - boxSize;
    divBox.style.width = divBox.style.height = boxSize + "px";
    divBox.style.backgroundColor = `rgb(${colorRand1}, ${colorRand2}, ${colorRand3})`;
    divBox.style.cursor = 'pointer';
    divBox.style.position = 'absolute';
    divBox.style.top = getRandom(0, maxTop) + "px";
    divBox.style.left = getRandom(0, maxLeft) + "px";
    $gameArea.insertAdjacentElement('afterbegin',divBox);
    divBox.addEventListener('click', () => {
        numberOfClicks++;
        $gameArea.innerHTML = '';
        generateQube()
    });
    
   
}

function getRandom (min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

