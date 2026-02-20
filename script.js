const text = document.getElementById("text");
const checkbtn = document.getElementById("check");
const againbtn = document.getElementById("again");
const answer = document.getElementById("answer");
const remaining = document.getElementById("remaining");
const mainText = document.getElementById("main");
const threebtn = document.getElementById("three");
const fourbtn = document.getElementById("four");
const fivebtn = document.getElementById("five");
const risetbtn = document.getElementById("riset");

let maxNumber = 0;

let number = Math.floor(Math.random() * 10) + 1;

let count = 0;

risetbtn.disabled = true;

function changeNumber() {
    number = Math.floor(Math.random() * 10) + 1;
}

function checkNumber() {
    const value = Number(text.value);
    if(isNaN(value) || value === "") {
        answer.innerText = "";
        const span = document.createElement("span");
        span.innerText = "数値を入力してください";
        answer.appendChild(span);
        text.value = "";
        return;
    }
    text.value = "";
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

function remainingCount() {
    remaining.innerText = "";
    const span = document.createElement("span");
    span.innerText = "残り回数： " + (maxNumber - count);
    remaining.appendChild(span);
}

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
    answer.innerText = "";
    checkbtn.disabled = false;
    count = 0;
    remainingCount();
    againbtn.style.display = "none";
});

threebtn.addEventListener("click", function() {
    maxNumber = 3;
    visible();
    remainingCount();
    fourbtn.disabled = true;
    fivebtn.disabled = true;
    risetbtn.disabled = false;
});

fourbtn.addEventListener("click", function() {
    maxNumber = 4;
    visible();
    remainingCount();
    threebtn.disabled = true;
    fivebtn.disabled = true;
    risetbtn.disabled = false;
});

fivebtn.addEventListener("click", function() {
    maxNumber = 5;
    visible();
    remainingCount();
    threebtn.disabled = true;
    fourbtn.disabled = true;
    risetbtn.disabled = false;
});

function visible() {
    text.style.display = "inline";
    checkbtn.style.display = "inline";
    remaining.style.display = "inline";
    mainText.style.display = "inline";
}

function invisible() {
    text.style.display = "none";
    checkbtn.style.display = "none";
    remaining.style.display = "none";
    mainText.style.display = "none";
}

risetbtn.addEventListener("click", function() {
    answer.innerText = "";
    text.value = "";
    count = 0;
    invisible();
    threebtn.disabled = false;
    fourbtn.disabled = false;
    fivebtn.disabled = false;
    risetbtn.disabled = true;
});