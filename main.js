$(document).ready(apply_click_handlers);

let input_array = [''],
    total_string,
    input_index = 0,
    operators = ['x', '-', '+', '/'];


function apply_click_handlers() {
    $('.operands > .btn').click(receive_operand);
    $('.operators > .btn').click(receive_operator);
    $('.equals > .btn').on('click', function() {
        console.log(mathify_input_array(input_array));
    });
    $('.clear_entry > .btn').click(clear_entry);
    $('.clear_all > .btn').click(clear_all);
}

function clear_all() {
    display_inputs();
    input_array = [''];
    input_index = 0;
    display_inputs();
}

function clear_entry() {
    vlet current_entry = input_array[input_index];
    if(current_entry.length > 0) {
        let temp = current_entry.substring(0,current_entry.length-1);
        input_array[input_index] = temp;
    }
    display_inputs();
}

// Display inputs
function display_inputs(){
    total_string = input_array.join("");
    if(total_string.length > 0){
        $('#display').text(total_string);
    } else {
        $('#display').text('0');
    }
}

// Takes in numbers/operands and adds to input_array
function receive_operand(){
    if (input_array[input_index]["input_index".length-1] === "."){
        console.log('INVALID: Consecutive decimals')
    } else {
        input_array[input_index] += $(this).text();
    }
    display_inputs();
}

// Takes in operators and adds to input_array
function receive_operator() {
    if (input_array[input_array.length - 1]===""){
        console.log("INVALID: Please input a number");
        display_inputs();
    }
    else {
        input_index++;
        input_array[input_index] = $(this).text();
        input_index++;
        input_array[input_index] = '';
        display_inputs();
    }
}

// Does the math for the input array's contents
function mathify_input_array(arr){
    while(arr.length > 1) {
        let operation = arr.splice(0, 3),
            get_total = calc(operation);
        arr.unshift(get_total);
        console.log(operation, get_total);
    }
    display_inputs();
    return arr;
}

// Identifies type of operator then does math
// calculations/converts string to float
function calc(arr) {
    let tot = 0;
    if (arr.length >= 3) {
        let opera = arr[1],
            num1 = parseFloat(arr[0]),
            num2 = parseFloat(arr[2]);

        switch (opera) {
            case "+":
                tot = num1 + num2;
                console.log("IF called: ", tot);
                break;
            case "-":
                tot = num1 - num2;
                break;
            case "*":
            case "x":
            case "X":
                tot = num1 * num2;
                break;
            case "/":
                tot = num1 / num2;
                break;
        }
    }
    display_inputs();
    return tot;
}