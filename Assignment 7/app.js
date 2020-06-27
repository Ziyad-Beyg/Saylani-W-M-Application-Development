

function number_by_input(input){
    var input_number = document.getElementById("input_number");

    input_number.value += input;
}

function clear_input(){
    var input_number = document.getElementById("input_number");

    input_number.value = "";
}

function calculate_input(){
    var input_number = document.getElementById("input_number");

    input_number.value = eval(input_number.value);
}