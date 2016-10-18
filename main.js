$(document).ready(apply_click_handlers);
var input_array = [''];
var total_string;
var input_index = 0;
var operators = ['x', '-', '+', '/'];
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
    var current_entry = input_array[input_index];
    console.log("CHECK: clear_entry function called");
    if(current_entry.length > 0) {
        console.log("CE function-IF ");
        var temp = current_entry.substring(0,current_entry.length-1);
        input_array[input_index] = temp;
        //TODO This would have acted as a delete button, but it was adding operands to my operator string
        // if(temp.length===0){
        //     if(input_index === 0) {
        //         console.log("CE has nothing to clear");
        //     } else {
        //         console.log(" clear_entry/ELSE CHECK: ", input_array);
        //         console.log("before pop: ", input_array);
        //         input_array.pop();
        //         console.log("after pop: ", input_array);
        //         input_index--;
        //     }
        // }
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
    console.log($(this).text());
    if (input_array[input_index]["input_index".length-1] === "."){
        console.log('INVALID: Consecutive decimals')
    } else {
        input_array[input_index] += $(this).text();
        console.log('input_array= ', input_array);
    }
    display_inputs();
}
// Takes in operators and adds to input_array
function receive_operator() {
    console.log('CALLED receive_operator');
    if (input_array[input_array.length - 1]===""){
        console.log("INVALID: Please input a number");
        display_inputs();
    }
    // if (input_array[input_array.length - 1]==="+" ||
    //     input_array[input_array.length - 1]==="-" ||
    //     input_array[input_array.length - 1]==="x" ||
    //     input_array[input_array.length - 1]==="/") {
    //     console.log("ERROR: consecutive operators entered");
    // }
    else {
    console.log('CALLED receive_operator');
    input_index++;
    input_array[input_index] = $(this).text();
    console.log('input_array= ', input_array);
    input_index++;
    input_array[input_index] = '';
    display_inputs();
    }
}
// Does the math for the input array's contents
function mathify_input_array(arr){
    console.log("mathify function called");
    while(arr.length > 1) {
        var operation = arr.splice(0, 3);
        var get_total = calc(operation);
        arr.unshift(get_total);
        console.log(operation, get_total);
    }
    display_inputs();
    return arr;
}

// Identifies type of operator then does math
// calculations/converts string to float
function calc(arr) {
    console.log("Calc function called");
    var tot = 0;
    if (arr.length >= 3) {
        console.log("Calc function IF called");
        var opera = arr[1];
        var num1 = parseFloat(arr[0]);
        var num2 = parseFloat(arr[2]);

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





