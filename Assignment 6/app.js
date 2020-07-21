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
var n;
if( n = user_input_for_username.search("@" || "." || "," || "!")){
    alert("Please enter a valid name");
}
else{
    alert("valid username");

}
 
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

var user = prompt("Enter your new password:");
if(user[0] >= 1 && user[0] <= 9) {
    alert("Enter a valid password");
}
else if(user.length < 6) {
    alert("Enter a valid password");
}

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


//                                              Chapter 26 to 30


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

var weight = prompt("Enter your weight in kilograms:");
weight = parseFloat(weight);
document.write("The weight of user is " + weight + " kilograms");

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

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var later_date = new Date("December 31, 2020");
document.write(later_date + "<br>" + "<br>" + "<hr>" );

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 18, 2015

var date_of_1st_ramadan = new Date("June 18, 2015");
var date_of_1st_ramadan_in_millis = date_of_1st_ramadan.getTime();
var today_date = new Date();
var today_date_in_millis = today_date.getTime();
var diff = (today_date_in_millis - date_of_1st_ramadan_in_millis);
var diff_days_till_today = diff / (1000 * 60 * 60 * 24);
var accurate_diff_days_till_today = Math.floor(diff_days_till_today);
document.write(accurate_diff_days_till_today + " days have passed since 1st Ramadan, 2015" + "<br>" + "<br>" + "<hr>" );

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var latest_date = new Date();
var latest_date_millis = latest_date.getTime();
var reference_date = new Date("January 01, 2015");
var reference_date_millis = reference_date.getTime();
var milliseconds_from_2015 = (latest_date_millis - reference_date_millis);
var accurate_milliseconds_from_2015 = Math.floor(milliseconds_from_2015);
document.write("On Reference date " + reference_date + ", <br>" + accurate_milliseconds_from_2015 + 
" seconds had passed since begining of 2015" + "<br>" + "<br>" + "<hr>" );

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var current_date_before_an_hour = new Date();
current_date_before_an_hour.setHours(current_date_before_an_hour.getHours() - 1 );
var current_date = new Date();
document.write("Current Date: " + current_date + "<br>" + " 1 hour ago, it was " + 
current_date_before_an_hour + "<br>" + "<br>" + "<hr>" ); 

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var current_date_before_100_years = new Date();
current_date_before_100_years.setFullYear(current_date_before_100_years.getFullYear() - 100 );
var current_date_1 = new Date();
document.write("Current Date: " + current_date_1 + "<br>" + " 100 years ago, it was " + 
current_date_before_100_years + "<br>" + "<br>" + "<hr>" );

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var user_input_DOB = prompt("Enter Date of Birth", " like  mm/dd/yyyy");
var today = new Date();
var birthDate = new Date(user_input_DOB);
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
}
document.write("Your age is: " + age + "<br> Your birth year is: " + 
birthDate.getFullYear() + "<br>" + "<br>" + "<hr>" );

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

document.write("<h3>" + "<b>" + "K-Electric Bill" + "</b>" + "</h3>" + "<br>")
var Customer_name_for_bill = "ABC Customer";
var current_date_2 = new Date();
var current_month = current_date_2.getMonth();
var number_of_units_consumed = 410;
var charges_per_unit = 16;
var late_payment_surcharges = 350;
document.write("Customer Name: " + "<b>" + Customer_name_for_bill + "</b>" + "<br> Month: " + 
"<b>" + current_month + "</b>" + "<br>" + "Number Of Units: " + "<b>" + number_of_units_consumed + 
"</b>" + "<br>" + "Charges per Unit: " + "<b>" + charges_per_unit + "</b>" + "<br>" + "<br>" + 
"Net Amount Payable(within Due Date): " + "<b>" + number_of_units_consumed * charges_per_unit + 
"</b>" + "<br>" + "Late Payment Surcharges: " + "<b>" + late_payment_surcharges + "</b>" + "<br>" +
"Gross Amount Payable(after Due Date): " + "<b>" + 
((number_of_units_consumed * charges_per_unit) + late_payment_surcharges) + "</b>" + "<br>" + "<br>" + "<hr>" );


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

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
}
let number_whose_factorial_is_to_be_calculated = +prompt("Enter a number for it's factorial calculation");
answer = factorial(number_whose_factorial_is_to_be_calculated)
document.write("<h3>" + "<b>" + "FACTORIAL CALCULATOR" + "</b>" + "</h3>" + "<br>" +
"The factorial of " + number_whose_factorial_is_to_be_calculated + " is " + answer + "<br>" + "<br>" + "<hr>");

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

var starting_num_of_counting = +prompt("Enter a number to start counting");
var ending_num_of_counting = +prompt("Enter a number to end counting");

function counting_with_user_input(s, e){
    document.write("<h3>" + "<b>" + "COUNTING FROM " + starting_num_of_counting + " TO " +  
    ending_num_of_counting + "</b>" + "</h3>" + "<br>");
    for(var start_count = starting_num_of_counting; start_count <= ending_num_of_counting; start_count++ ){
        document.write(start_count + "<br>" );
    }
    document.write("<br>" + "<hr>");
}

counting_with_user_input(starting_num_of_counting, ending_num_of_counting);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse 2 = Base 2 + Perpendicular 2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function outer(){
    var base = +prompt("Enter a value for Base of right angle triangle");
    var perpendicular = +prompt("Enter a value for Perpendicular of right angle triangle");

    function inner(base, perpendicular){
        var b2 = (base * base);
        var p2 = (perpendicular * perpendicular);
        return b2 + p2;
    }

    returning_value = inner(base, perpendicular);

    var hypotenuse_square =  (returning_value);
    var hypotenuse = Math.sqrt(hypotenuse_square);

    document.write(" Value of Hypotenuse: " + hypotenuse + "<br>" + "<br>" + "<hr>");
}

outer();

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function area_of_rectangle(width, height){
    var area_denoted_by_A = (width * height);
    return area_denoted_by_A;
}

var width_of_rectangle_by_value = 10;
var height_of_rectangle_by_value = 15;

var result_of_returned_area = area_of_rectangle(width_of_rectangle_by_value, height_of_rectangle_by_value);

document.write("<h3>" + "<b>" + "Arguments as variables" + "</b>" + "</h3>" + "<br>" + 
"Area of Rectangle: " + result_of_returned_area + "<br>" + "<br>");

var result_of_returned_area_1 = area_of_rectangle(10, 15);

document.write("<h3>" + "<b>" + "Arguments as value" + "</b>" + "</h3>" + "<br>" + 
"Area of Rectangle: " + result_of_returned_area_1 + "<br>" + "<br>" + "<hr>");


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function palindrome_checker(){
    var palindrome_word_check = prompt("Enter a string to check if it is palindrome or not");

var palindrome_word_container = "";

for(var p = palindrome_word_check.length - 1; p >= 0; p--){
    palindrome_word_container += palindrome_word_check[p]
}

document.write("<h3>" + "<b>" + "PALINDROME CHECKER" + "</b>" + "</h3>" + "<br>");

if (palindrome_word_check === palindrome_word_container) {
    document.write("The word '" + palindrome_word_check + "' is a Palindrome");
}

else {
    document.write("The word '" + palindrome_word_check + "' is not a Palindrome");
}

document.write("<br>" + "<br>" + "<hr>");

}

palindrome_checker();

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

var example_string = "the quick brown fox";

function uppercase_first_letter_of_every_word_in_string(t_q_b_f)
{
  var array1 = t_q_b_f.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}

var return_from_newarray1 = uppercase_first_letter_of_every_word_in_string(example_string);
document.write("<h3>" + "<b>" + "CAPITALIZE FIRST LETTER OF EVERY WORD IN STRING" + "</b>" + "</h3>" + "<br>" + 
"Example String: " + example_string + "<br>" + "<br>" + "Converted String: " + 
return_from_newarray1 + "<br>" + "<br>" + "<hr>");

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

var example_string_1 = "Web Development Tutorial";

function finding_longest_word_in_a_string(W_D_T)
{
  var array1 = W_D_T.match(/\w[a-z]{0,}/gi);
  var result_of_array1 = array1[0];

  for(var longest_word = 1 ; longest_word < array1.length ; longest_word++)
  {
    if(result_of_array1.length < array1[longest_word].length)
    {
    result_of_array1 = array1[longest_word];
    } 
  }
  return result_of_array1;
}

var return_from_result_of_array1 = finding_longest_word_in_a_string(example_string_1);
document.write("<h3>" + "<b>" + "LONGEST WORD IN STRING" + "</b>" + "</h3>" + "<br>" + 
"Example String: " + example_string_1 + "<br>" + "<br>" + "Longest String: " + 
return_from_result_of_array1 + "<br>" + "<br>" + "<hr>");

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

var sample_argument = "JSResourceS.com";
var occurrence_check_letter = "o"

function occurrence_count_of_a_letter(sample_str, specified_letter) 
{
 var specified_letter_Count = 0;
 for (var index = 0; index < sample_str.length; index++) 
 {
    if (sample_str.charAt(index) == specified_letter) 
      {
      specified_letter_Count += 1;
      }
  }
  return specified_letter_Count;
}

var return_from_specified_letter_count = occurrence_count_of_a_letter(sample_argument, occurrence_check_letter);
document.write("<h3>" + "<b>" + "OCCURRENCES OF THE SPECIFIED LETTER 'O' " + "</b>" + "</h3>" + "<br>" + 
"Sample Arguments: " + sample_argument + "<br>" + "<br>" + "Occurences of the specified letter '" + 
occurrence_check_letter + "' within the string: " + return_from_specified_letter_count + "<br>" + "<br>" + "<hr>");

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
    // Pass the radius to the function.
    // Calculate the circumference based on the radius, and output
    // "The circumference is NN".
// Create a function called calcArea:
    // Pass the radius to the function.
    // Calculate the area based on the radius, and output "The area
    // is NN".
    // Circumference of circle = 2πr
    // Area of circle = πr 2

document.write("<h3>" + "<b>" + "THE GEOMETRIZER" + "</b>" + "</h3>" + "<br>");

var radius_of_a_circle = 5;

calcCircumference(radius_of_a_circle);
calcArea(radius_of_a_circle);

function calcCircumference(radius){
    var value_of_pi = 3.142;
    var circumference_of_circle = (2 * (value_of_pi * radius));
    document.write("The Circumference is " + circumference_of_circle + "<br>" + "<br>");
}

function calcArea(radius){
    var value_of_pi = 3.142;
    var area_of_circle = (value_of_pi * (radius * radius));
    document.write("The Area is " + area_of_circle + "<br>" + "<br>" + "<hr>" );
}


//                                                  THE END
