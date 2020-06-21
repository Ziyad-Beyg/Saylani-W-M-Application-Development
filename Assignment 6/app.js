//                                              Chapter 21 to 25


// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var first_name = prompt("Enter your first name");
var last_name = prompt("Enter your last name");
var fullName = first_name.toUpperCase() + " " + last_name.toUpperCase();
alert("Assalam O Alaikum " + fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var user_favorite_mobile_phone_model = prompt("Enter your favorite mobile phone model",
"For example: Samsung Galaxy S6 Edge Plus");
document.write("My favorite phone is: " + user_favorite_mobile_phone_model + "<br>" + "Length of string: "
+ user_favorite_mobile_phone_model.length + "<br>" + "<br>" + "<hr>");

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var string_nationality = "Pakistani";
var index_of_n = string_nationality.indexOf("n");
document.write("String: " + string_nationality + "<br>" + "Index of 'n' is: " 
+ index_of_n + "<br>" + "<br>" + "<hr>" );

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser .

var string_1 = "Hello World";
var last_index_of_l = string_1.lastIndexOf("l");
document.write("String: " + string_1 + "<br>" + "Last index of 'l' is: " 
+ last_index_of_l + "<br>" + "<br>" + "<hr>" );

// 5. Write a program to find the character at 3 rd index in the
// word “Pakistani” and display the result in your browser .

var string_nationality_1 = "Pakistani";
var Character_at_index_3 = string_nationality_1[3];
document.write("String: " + string_nationality + "<br>" + "Character at index 3 is: "
+ Character_at_index_3 + "<br>" + "<br>" + "<hr>" );

// 6. Repeat Q1 using string concat() method.

var first_name_1 = prompt("Enter your first name");
var last_name_1 = prompt("Enter your last name");
var greetings = "Assalam O Alaikum ";
var fullName_1 = greetings.concat(first_name_1.toUpperCase(), " ", last_name_1.toUpperCase());
alert(fullName_1);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var original_content = "Hyderabad";
var after_replacement = original_content.replace("Hyder", "Islam");
document.write("City: " + original_content + "<br>" + "After replacement: " 
+ after_replacement + "<br>" + "<br>" + "<hr>" );

//8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var original_message = "Ali and Sami are best friends.They play cricket and football together.";
var message_after_replacement = original_message.replace(/and/g, "&");
document.write("Original Message: " + original_message + "<br>" + "<br>" + "After replacement: " 
+ message_after_replacement + "<br>" + "<br>" + "<hr>" );

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var string_2 = "472";
var converted_integer = Number(string_2);
document.write("Value: " + string_2 + "<br>" + "Type: " + typeof(string_2) + "<br>" + "<br>" +
"Value: " + converted_integer + "<br>" + "Type: " + typeof(converted_integer) + "<br>" + "<br>" + "<hr>" );

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var user_input_item = prompt("Enter your favorite fruit");
document.write("User Input: " + user_input_item + "<br>" + "<br>" + "Upper Case: "
+ user_input_item.toUpperCase()  + "<br>" + "<br>" + "<hr>" );

// 11.Write a program that takes user input. Convert and
// show the input in title case.

var user_input_item_1 = prompt("Enter your favorite programming language");
var copied_item = user_input_item_1.slice(0,1);
var copied_item_in_title_case = copied_item.toUpperCase();
var remaining_items = user_input_item_1.slice(1,user_input_item_1.length);
var user_input_item_1_in_title_case = copied_item_in_title_case + remaining_items;
document.write("User Input: " + user_input_item_1 + "<br>" + "<br>" + "Title Case: "
+ user_input_item_1_in_title_case + "<br>" + "<br>" + "<hr>" );

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var removing_dot = (num * 100);
var converting_to_string = removing_dot.toString();
document.write("Number: " + num + "<br>" + "<br>" + "Result: "
+ converting_to_string + "<br>" + "<br>" + "<hr>" );

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64 

var user_input_for_username = prompt("Enter your valid username");

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var array_named_A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user_input_search = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am ??");
for(var i = 0; i < array_named_A.length; i++){
    if (array_named_A[i] === user_input_search.toLowerCase()){
        alert(user_input_search.toLowerCase() + " is available at index " 
        + i + " in our bakery");
        break;
    } 
    else{
        alert("We are sorry, " + user_input_search.toLowerCase() + " is not available in our bakery");
        break;
    }

}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var ;

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university_name = "University of Karachi";
var split_method_on_university_name = " " ; 
for(var i = 0; i < university_name.length; i++){
    document.write(university_name[i] + "<br>");
}
document.write("<br> <hr>") 

// 17. Write a program to display the last character of a user input.

var user_input_item_2 = prompt("Enter your coutry name: ");
var index_of_last_character_of_user_input = (user_input_item_2.length) - 1 ;
document.write("User Input: " + user_input_item_2 + "<br>" + "<br>" + "Last character or User Input: "
+ user_input_item_2[index_of_last_character_of_user_input] + "<br>" + "<br>" + "<hr>" );

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var string_3 = "The quick brown fox jumps over the lazy dog";
var count = 0;
for(var j = 0; j < string_3.length; j++){
    if(string_3.toLowerCase().slice(j,j + 3) === "the"){
        count = count + 1;
    }
}
document.write("Text: " + string_3 + "<br>" + "<br>" + "There are "
+ count + " occurence(s) of word 'the'" + "<br>" + "<br>" + "<hr>" );


                                            //  Chapter 26 to 30


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var user_input_integer_positive = +prompt("Enter a positive floating point number");
var round_off_number_positive = Math.round(user_input_integer_positive);
var floor_number_positive = Math.floor(user_input_integer_positive);
var ceil_number_positive = Math.ceil(user_input_integer_positive);
document.write("Number: " + user_input_integer_positive + "<br>" + "<br>" 
+ "Round off value: " + round_off_number_positive + "<br>" + "<br>" 
+ "Floor value: " + floor_number_positive + "<br>" + "<br>" 
+ "Ceil value: " + ceil_number_positive + "<br>" + "<br>" + "<hr>" );

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var user_input_integer_negative = +prompt("Enter a negative floating point number");
var round_off_number_negative = Math.round(user_input_integer_negative);
var floor_number_negative = Math.floor(user_input_integer_negative);
var ceil_number_negative = Math.ceil(user_input_integer_negative);
document.write("Number: " + user_input_integer_negative + "<br>" + "<br>" 
+ "Round off value: " + round_off_number_negative + "<br>" + "<br>" 
+ "Floor value: " + floor_number_negative + "<br>" + "<br>" 
+ "Ceil value: " + ceil_number_negative + "<br>" + "<br>" + "<hr>" );

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var user_input_integer_for_absolute_value = +prompt("Enter a negative integer", "I will show it's absolute value");
var absolute_value_of_user_input = (user_input_integer_for_absolute_value + (-(user_input_integer_for_absolute_value) * 2));
document.write("The absolute value of " + user_input_integer_for_absolute_value 
+ " is " + absolute_value_of_user_input + "<br>" + "<br>" + "<hr>"); 

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.

var dice_number = Math.random() * 6;
var ceil_dice_number = Math.ceil(dice_number);
document.write("Random Dice Value: " + ceil_dice_number + "<br>" + "<br>");
var dice_number_1 = Math.random() * 6;
var ceil_dice_number_1 = Math.ceil(dice_number_1);
document.write("Random Dice Value: " + ceil_dice_number_1 + "<br>" + "<br>" + "<hr>");

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coin_toss = Math.random() * 2;
var floor_coin_toss = Math.floor(coin_toss);
if(floor_coin_toss === 1){
    document.write(floor_coin_toss + "<br>" + "<br>" + "Random coin Value: Heads" + "<br>" + "<br>" + "<hr>");
}
else{
    document.write(floor_coin_toss + "<br>" + "<br>" + "Random coin Value: Tails" + "<br>" + "<br>" + "<hr>");

}

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

var random_number_in_my_browser = Math.random() * 100;
var ceil_random_number_in_my_browser = Math.ceil(random_number_in_my_browser);
document.write("Random number between 1 to 100: " + ceil_random_number_in_my_browser + "<br>" + "<br>" + "<hr>");

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight_by_user_input = +prompt

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var random_number_for_game = Math.random() * 10;
var ceil_random_number_for_game = Math.ceil(random_number_for_game);
var user_input_random_number_for_game = +prompt("Enter number between 1 to 10");
if( user_input_random_number_for_game === ceil_random_number_for_game){
    alert("CONGRATULATION YOU WON");
}
else{
    alert("TRY AGAIN!!!" + "\n" + "Number was " + ceil_random_number_for_game );
}


//                                              Chapter 31 to 34


// 1. Write a program that displays current date and time in
// your browser.

var current_date_and_time = new Date();
document.write(current_date_and_time + "<br>" + "<br>" + "<hr>" );

// 2. Write a program that alerts the current month in words.
// For example December.

var current_date_for_month_name = new Date();
var months_array = new Array();
months_array[0] = "January";
months_array[1] = "February";
months_array[2] = "March";
months_array[3] = "April";
months_array[4] = "May";
months_array[5] = "June";
months_array[6] = "July";
months_array[7] = "August";
months_array[8] = "September";
months_array[9] = "October";
months_array[10] = "November";
months_array[11] = "December";
var current_month_name_in_words = months_array[current_date_for_month_name.getMonth()];
alert("Current Month: " + current_month_name_in_words);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var current_date_for_week_days_name = new Date();
var days_array = new Array();
days_array[0] = "Sunday";
days_array[1] = "Monday";
days_array[2] = "Tuesday";
days_array[3] = "Wednesday";
days_array[4] = "Thursday";
days_array[5] = "Friday";
days_array[6] = "Saturday";
var current_week_day_name_in_words = days_array[current_date_for_week_days_name.getDay()];
var current_week_day_first_three_letters = current_week_day_name_in_words.slice(0,3);
alert("Today is " + current_week_day_first_three_letters);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var current_date_for_week_days_name_1 = new Date();
var days_array_1 = new Array();
days_array_1[0] = "Sunday";
days_array_1[1] = "Monday";
days_array_1[2] = "Tuesday";
days_array_1[3] = "Wednesday";
days_array_1[4] = "Thursday";
days_array_1[5] = "Friday";
days_array_1[6] = "Saturday";
var current_week_day_name_in_words_1 = days_array_1[current_date_for_week_days_name_1.getDay()];
if(current_week_day_name_in_words_1 === "Saturday" || current_week_day_name_in_words_1 === "Sunday"){
    document.write("It's Fun Day" + "<br>" + "<br>" + "<hr>" );
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”.

var current_date_for_month_days = new Date();
var current_day_number_of_month = current_date_for_month_days.getDate();
if(current_day_number_of_month < 16){
    document.write("First fifteen days of the month" + "<br>" + "<br>" + "<hr>");
}
else{
    document.write("Last days of the month" + "<br>" + "<br>" + "<hr>");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var current_date_and_time_1 = new Date();
document.write("Current Date: " + current_date_and_time_1 + "<br>" + "<br>" );
var milli_seconds_since_jan1_1970 = current_date_and_time_1.getTime();
document.write("Ellapsed milliseconds since January 1, 1970: " + milli_seconds_since_jan1_1970 + "<br>" + "<br>" );
var minutes_since_jan1_1970 = (milli_seconds_since_jan1_1970 / 60000 );
document.write("Ellapsed minutes since January 1, 1970: " + minutes_since_jan1_1970 + "<br>" + "<br>" + "<hr>");

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var current_date_and_time_2 = new Date();
var am_or_pm = current_date_and_time_2.getHours();
if(am_or_pm < 12){
    alert("It's AM");
}
else{
    alert("It's PM");
}


//                                              Chapter 35 to 38


// 1. Write a function that displays current date & time in your
// browser.

function date_and_time(){
    var current_date_and_time_3 = new Date();
    document.write(current_date_and_time_3 + "<br>" + "<br>" + "<hr>" );
}

date_and_time();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function first_and_last_name(){
    var first_name_of_user = prompt("Enter your first name: ");
    var last_name_of_user = prompt("Enter your last name");
    document.write("ASSALAM O ALAIKUM " + first_name_of_user.toUpperCase() 
    + " " + last_name_of_user.toUpperCase() + "<br>" + "<br>" + "<hr>" );
}

first_and_last_name();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

var user_input_number_for_sum = +prompt("Enter your first number: ");
var user_input_number_for_sum_1 = +prompt("Enter another number: ");

function add(x, y){
    var sum_of_two_numbers_by_user = (x + y);
    return sum_of_two_numbers_by_user;
}

var return_of_function_add = add(user_input_number_for_sum, user_input_number_for_sum_1);
document.write("Sum of " + user_input_number_for_sum + " and " + user_input_number_for_sum_1 + " is " +
return_of_function_add + "<br>" + "<br>" + "<hr>" );

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

var num1_by_user = +prompt("Enter your number");
var num2_by_user = +prompt("Enter another number");
var operator_by_user = prompt("Enter your operator");

function Calculator(num1_by_user, num2_by_user, operator_by_user){
    var desired_result;
    if(operator_by_user === "+"){
        desired_result = (num1_by_user + num2_by_user);
    }
    else if(operator_by_user === "-"){
        desired_result = (num1_by_user - num2_by_user);
    }
    else if(operator_by_user === "/"){
        desired_result = (num1_by_user / num2_by_user);
    }
    else if(operator_by_user === "*"){
        desired_result = (num1_by_user * num2_by_user);
    }
    else if(operator_by_user === "%"){
        desired_result = (num1_by_user % num2_by_user);
    }
    else{
        desired_result = "You have entered invalid operator";
    }
    return desired_result;
}

var return_of_desired_result = Calculator(num1_by_user, num2_by_user, operator_by_user);
document.write("<h3>" + "<b>" + "CALCULATOR" + "</b>" + "</h3>" + "<br>" + 
" Number 1 value: " + num1_by_user + "<br>" + " Number 2 value: " + num2_by_user + "<br>" +
" Operator value: " + operator_by_user + "<br>" + " Final result value: " + return_of_desired_result + 
"<br>" + "<br>" + "<hr>");

// 5. Write a function that squares its argument.

var number_going_to_be_argument = +prompt("Enter a number for taking it's square");
function square(s){
    var square_of_number = s * s; 
    document.write("<h3>" + "<b>" + "SQUARE CALCULATOR" + "</b>" + "</h3>" + "<br>" +
    " value: " + number_going_to_be_argument + "<br>" + "<br>" + 
    " Square of value: " + square_of_number + "<br>" + "<br>" + "<hr>");
}

square(number_going_to_be_argument);

// 6. Write a function that computes factorial of a number.

function factorial(){
    
}