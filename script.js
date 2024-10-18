
function add(value){
    document.getElementById('display').value += value;


}
function remove(){
    document.getElementById(`display`).value = ``;
}
function equal(answer){
    answer = document.getElementById('display').value
    document.getElementById('display').value = eval(answer)
}


