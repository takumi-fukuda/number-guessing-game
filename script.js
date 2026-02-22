const selectNumber = document.getElementById("number");
const checkbtn = document.getElementById("check");
const againbtn = document.getElementById("again");
const answer = document.getElementById("answer");
const remaining = document.getElementById("remaining");
const mainText = document.getElementById("main");
const threebtn = document.getElementById("three");
const fourbtn = document.getElementById("four");
const fivebtn = document.getElementById("five");
const resetbtn = document.getElementById("reset");

let maxNumber = 0;

let number = Math.floor(Math.random() * 10) + 1;

let count = 0;

resetbtn.disabled = true;

// 乱数を生成する
function changeNumber() {
    number = Math.floor(Math.random() * 10) + 1;
}

// 入力された数字を判定する
function checkNumber() {
    const value = Number(selectNumber.value);
    if(isNaN(value) || selectNumber.value === "") {
        answer.innerText = "";
        const span = document.createElement("span");
        span.innerText = "数値を入力してください";
        answer.appendChild(span);
        selectNumber.value = "";
        return;
    }
    answer.innerText = "";
    count++;
    remainingCount();
    if(value === number) {
        const span = document.createElement("span");
        span.innerText = "当たり！";
        checkbtn.disabled = true;
        answer.appendChild(span);
        againbtn.style.display = "inline";
    } else if(value < number) {
        const span = document.createElement("span");
        span.innerText = "もっと大きいよ！";
        answer.appendChild(span);
        checkCount();
    } else {
        const span = document.createElement("span");
        span.innerText = "もっと小さいよ！";
        answer.appendChild(span);
        checkCount();
    }
    
}

// 残り回数を表示する
function remainingCount() {
    remaining.innerText = "";
    const span = document.createElement("span");
    span.innerText = "残り回数： " + (maxNumber - count);
    remaining.appendChild(span);
}

// ゲームオーバー時に正解を表示する
function checkCount() {
    if(count === maxNumber) {
        answer.innerText = "";
        const span = document.createElement("span");
        span.innerText = "ゲームオーバー！ 正解は" + number + "でした！";
        answer.appendChild(span);
        checkbtn.disabled = true;
        againbtn.style.display = "inline";
    }
}

checkbtn.addEventListener("click", function() {
    checkNumber();
});

againbtn.addEventListener("click", function() {
    changeNumber();
    selectNumber.value = "";
    answer.innerText = "";
    checkbtn.disabled = false;
    count = 0;
    remainingCount();
    againbtn.style.display = "none";
});

// 難易度選択時にゲームをスタートする
function gameStart(max) {
    maxNumber = max;
    visible();
    remainingCount();
    resetbtn.disabled = false;
}

threebtn.addEventListener("click", function() {
    gameStart(3);
    fourbtn.disabled = true;
    fivebtn.disabled = true;
});

fourbtn.addEventListener("click", function() {
    gameStart(4);
    threebtn.disabled = true;
    fivebtn.disabled = true;
});

fivebtn.addEventListener("click", function() {
    gameStart(5);
    threebtn.disabled = true;
    fourbtn.disabled = true;
});

function visible() {
    selectNumber.style.display = "inline";
    checkbtn.style.display = "inline";
    remaining.style.display = "inline";
    mainText.style.display = "inline";
}

function invisible() {
    selectNumber.style.display = "none";
    checkbtn.style.display = "none";
    remaining.style.display = "none";
    mainText.style.display = "none";
    againbtn.style.display = "none";
}

resetbtn.addEventListener("click", function() {
    answer.innerText = "";
    selectNumber.value = "";
    count = 0;
    invisible();
    checkbtn.disabled = false;
    threebtn.disabled = false;
    fourbtn.disabled = false;
    fivebtn.disabled = false;
    resetbtn.disabled = true;
});