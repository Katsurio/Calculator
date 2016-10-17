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
    $('#display').text(0);
}
function clear_entry() {
    console.log("CHECK: clear_entry function called");
    if(input_array.length === 1) {
        console.log("CE function-IF ");
        input_array[input_index].substring(input_array[0].length);
    } else if(input_array[input_array.length - 1]==="" &&
        input_array[input_array.length - 2].substr(0,3)==="+" ||
        input_array[input_array.length - 2].substr(0,3)==="-" ||
        input_array[input_array.length - 2].substr(0,3)==="x" ||
        input_array[input_array.length - 2].substr(0,3)==="/") {
            console.log(" clear_entry/IF CHECK before splice: ", input_array);
            input_array.splice(input_array.length - 2, 2);
            console.log("after splice: ", input_array);
            input_index -= 2;
    } else {
        console.log(" clear_entry/ELSE CHECK: ", input_array);
        console.log("before pop: ", input_array);
        input_array.pop();
        console.log("before pop: ", input_array);
        input_index--;
    }
    display_inputs();
}

// Display inputs
function display_inputs(){
    total_string = input_array.join("");
    $('#display').text(total_string);
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


// /**
//  * Created by Katsurio on 10/12/16.
//  */
// function calculate_display(type, value, item) {
//     switch(value){
//         case undefined:
//             $('#display').text("");
//             break;
//         default:
//             $('#display').text(value);
//             break;
//     }
//
// }
//
// var my_calculator =  new calculator(calculate_display);
// $(document).ready(function() {
//     $('.btn').click(function(){
//         var val = $(this).text();
//         switch (val) {
//             case 'CE':
//                 my_calculator.allClear();
//                 break;
//             case 'C':
//                 my_calculator.clear();
//                 break;
//             default:
//                 my_calculator.addItem($(this).text());
//                 break;
//         }
//     });
// });





