var num = 0;

document.getElementById("number").innerText = num;

function increment(){
   
    num = num + 1;
    document.getElementById("number").innerText = num;
}

function reset(){

    num = 0;
    document.getElementById("number").innerText = num;
}

function decrement(){

    num = num - 1;
    document.getElementById("number").innerText = num;
}

