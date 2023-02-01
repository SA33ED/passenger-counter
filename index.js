let count=0;

function increment(){
    count +=1;
    document.getElementById("count-el").innerText=count;
};
function decrement(){
    count -= 1;
    document.getElementById("count-el").innerText=count;
};

let saveEl=document.getElementById("save-el");
function save(){
    saveEl.innerHTML+=count+" - ";
    document.getElementById("count-el").innerText=0;
    count =0;
};

