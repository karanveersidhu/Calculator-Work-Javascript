


function disp(val){
    document.getElementById("console").value+=val;
}
function clr(){
    document.getElementById("console").value = "";
}
function eva(){
    var q = document.getElementById("console").value
    var ans = eval(q)
    document.getElementById("console").value = ans
}