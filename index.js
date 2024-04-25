function deleteMe(){
    document.getElementById("myResult").value = "";
}

function calculator(newValue){
       document.getElementById("myResult").value += newValue; 
}

function showResult(){
    var a = document.getElementById("myResult").value;
    var b = eval(a);
    document.getElementById("myResult").value = b;
}