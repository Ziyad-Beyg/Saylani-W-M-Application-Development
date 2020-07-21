//                                       CHAPTER - 1


// 1. Write a script to greet your website visitor using JS alert box.

alert("ASSALAM O ALIAKUM");

// 2. Write a script to display following message on your web page:

alert("Error! Please enter a valid password.");

// 3. Write a script to display following message on your web page:
// (Hint : Use line break)

alert("Welcome to JS land..." + "\n" + "Happy Coding!");

// 4. Write a script to display following messages in sequence:

alert("Welcome to JS land...");
var input_checkbox = "HAPPY CODING!!!" + "\n" + "🔳 Prevent this page from creating additional dialogs.";
alert(input_checkbox);

// 5. Generate the following message through browser’s developer console:

console.log("Hello... I can run JS through my web browser's console");

// 6. Make use of alerts in your new/existing HTML & CSS project.
// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//  a. Head
//  b. Body (before your page’s HTML)
//  c. Body (inside your page’s HTML)
//  d. Body (after your page’s HTML)


//                                       CHAPTER - 2


// 1. Declare a variable called username.

var username;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.
 
var myname = "ZIYAD BAIG";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message;
message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var student_name = "Jhone Doe";
alert(student_name);
var student_age = "15";
alert(student_age + " years old");
var student_course = "Certified Mobile Application Development";
alert(student_course);

// 5. Write a script to display the following alert using one JS
// variable:

var pizza = "PIZZA" + ("\n") + "PIZZ" + ("\n") + "PIZ" + ("\n") + "PI" + ("\n") + "P";
alert(pizza);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the below mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "example@example.com";
alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// 8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript" + "<br>" + "<hr>");

// 9. Store following string in a variable and show in alert and
// browser through JS

var template = ' ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ';
alert(template);


//                                       CHAPTER - 3


// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 15;
alert("I am " + age + " Years old");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var no_of_visits = 14;
alert("You have visited this site " + no_of_visits + " times");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2000;
document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number" + "<br>" + "<hr>");

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitor_name = "John Doe";
var product_title = "T-shirt";
var quantity = 5;
document.write("<b>" + visitor_name + "</b>" + " ordered " + "<b>" + quantity + " " + product_title + "</b>" + "(s)" + " on XYZ Clothing store" + "<br>" + "<hr>");


//                                       CHAPTER - 4


// 1. Declare 3 variables in one statement.

var a, b, c;

// 2. Declare 5 legal & 5 illegal variable names.

// LEGAL VARIABLES

var a; 
var A;
var name123;
var first_name;
var lastName;

// ILLEGAL VARIABLES

// var 5;
// var 123name;
// var ?b;
// var my name;
// var "age";

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("<h3>" + "<b>" + "Rules for naming JS variables" + "</b>" + "</h3>" + "<br>" +
 "Variable names can only contain , numbers, $ and __. For example: $my_1st variable" + "<br>" +
 "Variables must begin with a letter, $ or __. For example : $name, _name or name" + "<br>" +
 "Variable names are case sensitive" + "<br>" + 
 "Variable names should not be JS keywords" + "<br>" + "<hr>" );


//                                       CHAPTER - 5


// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var a = 10;
var b = 20;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c + "<br>" + "<hr>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var x = 10;
var y = 20;
var subtraction = x - y;
var multiplication = x * y;
var division = x / y;
var modulus = x % y;
document.write("Subtration of " + x + " and " + y + " is " + subtraction + "<br>" +
"Multiplication of " + x + " and " + y + " is " + multiplication + "<br>" + 
"Division of " + x + " and " + y + " is " + division + "<br>" + 
"Modulus of " + x + " and " + y + " is " + modulus + "<br>" + "<hr>" );

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var variable;
document.write("Value after variable declaration is: " + variable + "<br>");
variable = 17;
document.write("Initial value: " + variable + "<br>");
var increment = variable + 1;
document.write("Value after increament is: " + increment + "<br>");
var add_7 = increment + 7;
document.write("Value after addition of 7 is: " + add_7 + "<br>");
var decrement = add_7 - 1;
document.write("Value after decrement is: " + decrement + "<br>");
var remainder = decrement % 3;
document.write("The remainder after division by 3 is: " + remainder + "<br>" + "<hr>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticket_price = 600;
var number_of_ticket = 5;
var total_price = ticket_price * number_of_ticket;
document.write("Total cost to buy " + number_of_ticket + " tickets to a movie is " + total_price + "PKR" + "<br>" + "<hr>");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var table_of_number = 17;
var counting = 1;
document.write("TABLE OF " + table_of_number + "<br>");
for(table_of_number = 17; counting <= 10; counting++){
 document.write(table_of_number + " * " + counting + " = " + table_of_number*counting + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NN o C is NN o F”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NN o F is NN o C”.

var temp_in_celsius = 41;
var temp_in_fahrenheit = 105.8;
var fahrenheit_conversion = (temp_in_celsius * 9/5) + 32;
var celsius_conversion = (temp_in_fahrenheit - 32) * 5/9;
document.write("<hr>" + temp_in_celsius + "<sup>" + "o" + "</sup>" + "C is equal to " + fahrenheit_conversion + "<sup>" + "o" + "</sup>" + "F" + "<br>");
document.write(temp_in_fahrenheit + "<sup>" + "o" + "</sup>" + "F is equal to " + celsius_conversion + "<sup>" + "o" + "</sup>" + "C" + "<br>" + "<hr>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var cost_item1 = 780;
var cost_item2 = 590;
var quantity_item1 = 4;
var total_cost_item1 = cost_item1 * quantity_item1;
var quantity_item2 = 6;
var total_cost_item2 = cost_item2 * quantity_item2;
var shipping_charges = 100;
var total_price = total_cost_item1 + total_cost_item2 +shipping_charges;
document.write("<h3>" + "<b>" + "SHOPPING CART" + "</b>" + "</h3>" + "<br>" + 
"Price of item 1 is: " + cost_item1 + "<br>" +
"Quantity of item 1 is: " + quantity_item1 + "<br>" +
"Price of item 2 is: " + cost_item2 + "<br>" +
"Quantity of item 2 is: " + quantity_item2 + "<br>" +
"Shipping Charges: " + shipping_charges + "<br>" + 
"Total cost of your order is: " + total_price + "PKR" + "<br>" + "<hr>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var total_marks = 525;
var obtained_marks = 426;
var student_percantage = (obtained_marks / total_marks) * 100;
document.write("<h3>" + "<b>" + "MARK SHEET" + "</b>" + "</h3>" + "<br>" +
"Total marks: " + total_marks + "<br>" +
"Marks obtained: " + obtained_marks + "<br>" +
"Percentage: " + student_percantage + "%" + "<br>" + "<hr>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var one_riyal_in_pkr = 28;
var riyal_quantity = 25;
var one_usd_in_pkr = 104.80;
var usd_quantity = 10;
var total_pkr = (one_usd_in_pkr * usd_quantity) + (one_riyal_in_pkr * riyal_quantity);
document.write("<h3>" + "<b>" + "CURRENCY IN PKR" + "</b>" + "</h3>" + "<br>" + 
"Total currency in PKR is: " + total_pkr + "<br>" + "<hr>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var initial_number = 20;
var all_calculations = (((initial_number + 5) * 10) / 2);
document.write("Initial Number is: " + initial_number + "<br>" + 
"Result after all calculation is: " + all_calculations + "<br>" + "<hr>" );

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var current_year = 2020;
var birth_year = 2000;
var estimated_age = current_year - birth_year;
document.write("<h3>" + "<b>" + "AGE CALCULATOR" + "</b>" + "</h3>" + "<br>" + 
"Current year is: " + current_year + "<br>" + 
"Birth year is: " + birth_year + "<br>" +
"Calculated age is: " + estimated_age + "<br>" + "<hr>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)

var circle_radius = 30;
var pi = 3.142;
var circle_circumference = (2 * pi * circle_radius);
var circle_area = (pi * (circle_radius * circle_radius));
document.write("<h3>" + "<b>" + "THE GEOMETRIZER" + "</b>" + "</h3>" + "<br>" + 
"Radius of circle is: " + circle_radius + "<br>" + 
"Circumference of circle is: " + circle_circumference + "<br>" +
"Area of circle is: " + circle_area + "<br>" + "<hr>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favorite_snack = "slanty";
var my_current_age = 20;
var maximum_age = 70;
var amount_of_snacks_per_day = 2;
var remaining_life = (70-20);
var remaining_days = (remaining_life * 365);
var total_snacks_in_remaining_life = (remaining_days * amount_of_snacks_per_day);
document.write("<h3>" + "<b>" + "THE LIFETIME SUPPLY CALCULATOR" + "</b>" + "</h3>" + "<br>" + 
"Favorite snack is: " + favorite_snack + "<br>" + 
"Current age is: " + my_current_age + "<br>" +
"Estimated maximum age is: " + maximum_age + "<br>" +
"Amount of snacks per day is: " + amount_of_snacks_per_day + "<br>" +
"You will need " + total_snacks_in_remaining_life + " " + favorite_snack + " to last you until the ripe old age of " + maximum_age + "<br>" + "<hr>");


//                                       CHAPTER - 6 TO 9 


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 15;
var pre_increament = ++a;
var post_increament = a + 1;
var pre_decrement = --a;
var post_decrement = a - 1;
document.write("Result" + "<br>" + "The value of a is: " + a + "<br>" +
 "............................................" + "<br>" +
 "The value of ++a is: " + pre_increament + "<br>" + 
 "Now the value of a is: " + pre_increament + "<br>" + "<br>" +
 "The value of a++ is: " + pre_increament + "<br>" + 
 "Now the value of a is: " + post_increament + "<br>" + "<br>" + 
 "The value of --a is: " + pre_increament + "<br>" + 
 "Now the value of a is: " + pre_increament + "<br>" + "<br>" + 
 "The value of a-- is: " + pre_increament + "<br>" + 
 "Now the value of a is: " + a + "<br>" + "<hr>" );

//2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: 1" + "<br>" + 
"b is: 1" + "<br>" + 
"result is: 1" + "<br>" + "<br>" + 
"a is: 0" + "<br>" + 
"b is: 0" + "<br>" + 
"result is: 0" + "<br>" + "<br>" + 
"a is: -1" + "<br>" + 
"b is: 0" + "<br>" + 
"result is: 0" + "<br>" + "<br>" +
"a is: -2" + "<br>" + 
"b is: 0" + "<br>" + 
"result is: 0" + "<br>" + "<hr>" );

// 3. Write a program that takes input a name from user &
// greet the user.

var user_name = prompt("Enter your name: ");
document.write("Assalam o Alaikum " + user_name + " !!!" + "<br>" + "<hr>" );

// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var new_user_input_number = +prompt("Enter a new number", "Do Not Enter Number '5' ");
var counter = 1;
if(new_user_input_number !== " "){
 document.write("User has entered a new number " + "<br>")
 for(new_user_input_number; counter <= 10; counter++){
 document.write(new_user_input_number + " * " + counter + " = " + new_user_input_number * counter + "<br>");
 }
}
else{
 document.write("User has not entered any new number " + "<br>")
 for(var five = 5; counter <= 10; counter++){
 document.write(five + " * " + counter + " = " + five * counter + "<br>");
 }
}
document.write("<br>" + "<hr>");

// 5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subject_1 = prompt("ENTER ANY SUBJECT NAME");
var subject_2 = prompt("ENTER ANY SUBJECT NAME");
var subject_3 = prompt("ENTER ANY SUBJECT NAME");
var total_marks_for_each_subject = 100;
var obtained_marks_for_each_subject_1 = +prompt("Enter " + subject_1 + " Number");
var obtained_marks_for_each_subject_2 = +prompt("Enter " + subject_2 + " Number");
var obtained_marks_for_each_subject_3 = +prompt("Enter " + subject_3 + " Number");
var percentage_1 = (obtained_marks_for_each_subject_1 / total_marks_for_each_subject) * 100;
var percentage_2 = (obtained_marks_for_each_subject_2 / total_marks_for_each_subject) * 100;
var percentage_3 = (obtained_marks_for_each_subject_3 / total_marks_for_each_subject) * 100;
var total_marks_of_3_subjects = (total_marks_for_each_subject + total_marks_for_each_subject + total_marks_for_each_subject);
var total_obtained_marks = (obtained_marks_for_each_subject_1 + obtained_marks_for_each_subject_2 + obtained_marks_for_each_subject_3);
var total_percentage = ((total_obtained_marks / total_marks_of_3_subjects) * 100);
document.write("<table>" 
 + "<tr>" + "<th>" + "|SUBJECTS|" + "</th>" + "<th>" + "|TOTAL MARKS|" + "</th>" + "<th>" + "|OBTAINED MARKS|" + "</th>" + "<th>" + "|PERCENTAGE|" + "</th>" + "</tr>" + "<br>" 
 + "<tr>" + "<td>" + "<center>" + subject_1 + "</center>" + "</td>" + "<td>" + "<center>" + total_marks_for_each_subject + "</center>" + "</td>" + "<td>" + "<center>" + obtained_marks_for_each_subject_1 + "</center>" + "</td>" + "<td>" + "<center>" + percentage_1 + "%" + "</center>" + "</td>" + "</tr>"
 + "<tr>" + "<td>" + "<center>" + subject_2 + "</center>" + "</td>" + "<td>" + "<center>" + total_marks_for_each_subject + "</center>" + "</td>" + "<td>" + "<center>" + obtained_marks_for_each_subject_2 + "</center>" + "</td>" + "<td>" + "<center>" + percentage_2 + "%" + "</center>" + "</td>" + "</tr>"
 + "<tr>" + "<td>" + "<center>" + subject_3 + "</center>" + "</td>" + "<td>" + "<center>" + total_marks_for_each_subject + "</center>" + "</td>" + "<td>" + "<center>" + obtained_marks_for_each_subject_3 + "</center>" + "</td>" + "<td>" + "<center>" + percentage_3 + "%" + "</center>" + "</td>" + "</tr>"
 + "<tr>" + "<td>" + " " + "</td>" + "<td>" + "<center>" + "<b>" + total_marks_of_3_subjects + "</b>" + "</center>" + "</td>" + "<td>" + "<center>" + "<b>" + total_obtained_marks + "</b>" + "</center>" + "</td>" + "<td>" + "<center>" + "<b>" + total_percentage + "%" + "</b>" + "</center>" + "</td>" + "</b>" + "</tr>" 
 + "</table>" + "<br>" + "<hr>");


//                                       CHAPTER - 9 TO 11 


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var user_input_for_city = prompt("Enter City Name");
if(user_input_for_city == "karachi" || user_input_for_city == "Karachi" || user_input_for_city == "KARACHI" ){
 document.write("Welcome To City Of Lights !!!" + "<br>");
}
else{
 document.write("Welcome" + "<br>");
}
document.write("<br>" + "<hr>");

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var user_input_for_gender = prompt("Enter Your Gender");
if(user_input_for_gender == "male" || user_input_for_gender == "MALE" || user_input_for_gender == "Male"){
 document.write("Good Morning Sir." + "<br>");
}
else if(user_input_for_gender == "female" || user_input_for_gender == "FEMALE" || user_input_for_gender == "female"){
 document.write("Good Morning Ma’am." + "<br>");
}
else{
 document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var user_input_for_traffic_lights = prompt("Enter Traffic Light Color", "RED, YELLOW or GREEN");
if(user_input_for_traffic_lights == "red" || user_input_for_traffic_lights == "Red" || user_input_for_traffic_lights == "RED"){
 document.write("MUST STOP!!!, light is " + user_input_for_traffic_lights + "<br>");
}
else if(user_input_for_traffic_lights == "yellow" || user_input_for_traffic_lights == "Yellow" || user_input_for_traffic_lights == "YELLOW"){
 document.write("READY TO MOVE, light is " + user_input_for_traffic_lights + "<br>");
}
else if(user_input_for_traffic_lights == "green" || user_input_for_traffic_lights == "Green" || user_input_for_traffic_lights == "GREEN"){
 document.write("MOVE NOW, light is " + user_input_for_traffic_lights + "<br>");
}
else{
 document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var user_input_for_fuel = +prompt("Enter Amount Of Fuel In Car","Can Be In Floating Points " + " In Litres" );
if(user_input_for_fuel <= 0.25 ){
 document.write("Please refill the fuel in your car" + "<br>");
}
else if(user_input_for_fuel > 0.25){
 document.write("You Have Enough Fuel To Travel" + "<br>");
}
else{
 document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

document.write("Yes, Alert messages are being displayed, that's mean they are true" + "<br>" +
"part A is displaying alert message: given condition for variable a is true" + "<br>" +
"part C is displaying alert messages: condition 2 is true & condition 4 is true" + "<br>" +
"part D is displaying alert message: The cost equals" + "<br>" +
"part E is displaying alert message: True" + "<br>" +
"part F is displaying alert message: car is smaller than cat" + "<br>" + "<hr>");

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page.
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

var subject_1_marks_obtaied = +prompt("Enter Marks");
var subject_2_marks_obtaied = +prompt("Enter Marks");
var subject_3_marks_obtaied = +prompt("Enter Marks");
var total_marks_of_all_subjects = 300;
var obtained_marks_for_all_subjects = (subject_1_marks_obtaied + subject_2_marks_obtaied + subject_3_marks_obtaied);
var overall_percentage = ((obtained_marks_for_all_subjects / total_marks_of_all_subjects) * 100);
document.write("<h3>" + "<b>" + "MARKS SHEET" + "</b>" + "</h3>" + "<br>" + 
"Total Marks: " + total_marks_of_all_subjects + "<br>" + 
"Marks Obtained: " + obtained_marks_for_all_subjects + "<br>"); 
if(overall_percentage >= 80){
 document.write("Percentage: " + overall_percentage + "%" + "<br>" + 
 "Grade: A-one" + "<br>" +
 "Remarks: Excellent" + "<br>" );
}
else if(overall_percentage >= 70){
 document.write("Percentage: " + overall_percentage + "%" + "<br>" + 
 "Grade: A" + "<br>" +
 "Remarks: Good" + "<br>" );
}
else if(overall_percentage >= 60){
 document.write("Percentage: " + overall_percentage + "%" + "<br>" + 
 "Grade: B" + "<br>" +
 "Remarks: You Need To Improve" + "<br>" );
}
else if(overall_percentage < 60){
 document.write("Percentage: " + overall_percentage + "%" + "<br>" + 
 "Grade: Fail" + "<br>" +
 "Remarks: Sorry" + "<br>" );
}
else{
 document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secret_number = 7;
var user_guess = +prompt("Guess The Secret Number", "Number Ranges From 1 To 10");
if(user_guess == secret_number){
 document.write("BINGO!!!, Correct Answer" + "<br>");
}
else if(user_guess == secret_number + 1 || user_guess == secret_number - 1 ){
 document.write("Close enough to the correct answer" + "<br>");
}
else{
 document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var number_divisible_by_3 = +prompt("Enter A Number");
if(number_divisible_by_3 % 3 == 0){
 document.write("The number: " + number_divisible_by_3 + " is divisible by 3" + "<br>");
}
else if(number_divisible_by_3 % 3 !== 0){
 document.write("The number: " + number_divisible_by_3 + " is not divisible by 3" + "<br>");
}
else{
 document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var number_checking = +prompt("Enter A Valid Number");
if(number_checking % 2 == 0){
 document.write("The number: " + number_checking + " is Even" + "<br>");
}
else if(number_checking % 2 !== 0){
 document.write("The number: " + number_checking + " is Odd" + "<br>");
}
else{
 document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature_input = +prompt("Enter Temperature");
if(temperature_input > 40){
 document.write("Temperature is: " + temperature_input + "C" + "<br>" + "It is too hot outside." + "<br>");
}
else if(temperature_input > 30){
 document.write("Temperature is: " + temperature_input + "C" + "<br>" + "The Weather today is Normal." + "<br>");
}
else if(temperature_input > 20){
 document.write("Temperature is: " + temperature_input + "C" + "<br>" + "Today’s Weather is cool." + "<br>");
}
else if(temperature_input > 10){
 document.write("Temperature is: " + temperature_input + "C" + "<br>" + "OMG! Today’s weather is so Cool." + "<br>");
}
else{
 document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var first_number = +prompt("Enter First Number");
var second_number = +prompt("Enter Second Number");
var Operation_perform = prompt("Enter Operation","+, -, *, /, %");
var final_result;
if(Operation_perform == "+"){
 final_result = (first_number + second_number);
 document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else if(Operation_perform == "-"){
 final_result = (first_number - second_number);
 document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else if(Operation_perform == "*"){
 final_result = (first_number * second_number);
 document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else if(Operation_perform == "/"){
 final_result = (first_number / second_number);
 document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else if(Operation_perform == "%"){
 final_result = (first_number % second_number);
 document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else{
 document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");


//                                       CHAPTER - 12 TO 13


// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var charachter_input = prompt("Enter Your Number Or Alphabet");
var index = 0;

var i = charachter_input.charCodeAt(index);
if(i>= 65 && i<=90){
    document.write(charachter_input + " is an uppercase letter or string" + "<br>");
}
else if(i>= 97 && i<= 122){
    document.write(charachter_input + " is a lowercase letter or string" + "<br>");
}
else if(i>=48 && i<=57){
    document.write(charachter_input + " is a number" + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
   document.write("<br>" + "<hr>");

// 2. Write a JavaScript program that accept two integers and display the
// larger. Also show if the two integers are equal.   

var integer_1 = +prompt("Enter An Integer");
var integer_2 = +prompt("Enter Another Integer");

if(integer_1 > integer_2 && integer_2 < integer_1){
    document.write(integer_1 + " is Greater than " + integer_2 + "<br>");
}
else if(integer_2 > integer_1 && integer_1 < integer_2){
    document.write(integer_2 + " is Greater than " + integer_1 + "<br>");
}
else if(integer_1 == integer_2 && integer_2 == integer_1){
    document.write(integer_1 + " is equal to " + integer_2 + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
   document.write("<br>" + "<hr>");

// 3. Write a program that takes input a number from user & state whether
// the number is positive, negative or zero.

var integer_check = +prompt("Enter a Number", "Either Positive/Negative Or Zero ");
if(integer_check > 0 ){
    document.write(integer_check + " is a Positive Number" + "<br>");
}
else if(integer_check < 0 ){
    document.write(integer_check + " is a Negative Number" + "<br>");
}
else if(integer_check == 0 ){
    document.write(integer_check + " is equal to Zero" + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
   document.write("<br>" + "<hr>");

// 4. Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise

var vowel_check = prompt("Enter an Alphabet", "One Length String");
if (vowel_check == "a" || "A"){
    document.write(vowel_check + " is a Vowel " + "<br>");
}
else if (vowel_check == "e" || "E"){
    document.write(vowel_check + " is a Vowel " + "<br>");
}
else if (vowel_check == "i" || "I"){
    document.write(vowel_check + " is a Vowel " + "<br>");
}
else if (vowel_check == "o" || "O"){
    document.write(vowel_check + " is a Vowel " + "<br>");
}
else if (vowel_check == "u" || "U"){
    document.write(vowel_check + " is a Vowel " + "<br>");
}
else if (vowel_check !== "a" || "A"){
    document.write(vowel_check + " is a Consonant " + "<br>");
}
else if (vowel_check !== "e" || "E"){
    document.write(vowel_check + " is a Consonant " + "<br>");
}
else if (vowel_check !== "i" || "I"){
    document.write(vowel_check + " is a Consonant " + "<br>");
}
else if (vowel_check !== "o" || "O"){
    document.write(vowel_check + " is a Consonant " + "<br>");
}
else if (vowel_check !== "u" || "U"){
    document.write(vowel_check + " is a Consonant " + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
   document.write("<br>" + "<hr>");

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect password” otherwise.

var password = "IloveU";
var password_confirmation = prompt("Enter Your Password To Confirm");
if(password_confirmation == password){
    alert("YOUR PASSWORD IS CORRECT");
    document.write("YOUR PASSWORD IS CORRECT" + "<br>");
}
else if(password_confirmation !== password){
    alert("YOUR PASSWORD IS INCORRECT");
    document.write("YOUR PASSWORD IS INCORRECT" + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
   document.write("<br>" + "<hr>");

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) { 
//    greeting = "Good day";
// else
//    greeting = "Good evening";
//  }

var greeting;
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
}
else{ 
    greeting = "Good evening"; 
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements

var time = 1700;
if(time >= 0000 && time < 1200){
    document.write("Good Morning!!!" + "<br>");
}
else if(time >= 1200 && time < 1700){
    document.write("Good AfterNoon!!!" + "<br>");
}
else if(time >= 1700 && time < 2100){
    document.write("Good Evening!!!" + "<br>");
}
else if(time >= 2100 && time < 2359){
    document.write("Good Night!!!" + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
   document.write("<br>" + "<hr>");


//                                       CHAPTER - 14 TO 16


// 1. Declare an empty array using JS literal notation to store student names in future.

var students_name_array = [];

// 2. Declare an empty array using JS object notation to store student names in future.

var students_name_array_1 = {};

// 3. Declare and initialize a strings array.

var string_array = ["a", "b", "c", "d"];

// 4. Declare and initialize a numbers array.

var number_array = [1, 2, 3, 4];

// 5. Declare and initialize a boolean array.

var bool_array = [true, false, false, true];

// 6. Declare and initialize a mixed array.

var mixed_array = ["a", 1, true, "b", 2 , false, "c", 3, false, "d", 4, true];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// Show the listed qualifications in your browser like:

var qualification_array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "Phd"];

document.write("<h3>" + "<b>" + "QUALIFICATIONS" + "</b>" + "</h3>" + "<br>");
document.write( "1)" + " " + qualification_array[0] + "<br>" );
document.write( "2)" + " " + qualification_array[1] + "<br>" );
document.write( "3)" + " " + qualification_array[2] + "<br>" );
document.write( "4)" + " " + qualification_array[3] + "<br>" );
document.write( "5)" + " " + qualification_array[4] + "<br>" );
document.write( "6)" + " " + qualification_array[5] + "<br>" );
document.write( "7)" + " " + qualification_array[6] + "<br>" );
document.write( "8)" + " " + qualification_array[7] + "<br>" );
document.write("<br>" + "<hr>");

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

var stud_name_array = ["Michael", "John", "Tony"];
var stud_score_array = [320, 230, 480];

var percentage_stud_1 = (stud_score_array[0] / 500) *  100 ;
var percentage_stud_2 = (stud_score_array[1] / 500) *  100 ;
var percentage_stud_3 = (stud_score_array[2] / 500) *  100 ;

var stud_percentage_array = [];
stud_percentage_array[0] = percentage_stud_1;
stud_percentage_array[1] = percentage_stud_2;
stud_percentage_array[2] = percentage_stud_3;

document.write("Score of " + stud_name_array[0] + " is " + stud_score_array[0] + ". Percentage : " + stud_percentage_array[0] + "%" +
 "</br>" + "Score of " + stud_name_array[1] + " is " + stud_score_array[1] + ". Percentage : " + stud_percentage_array[1] + "%" +
 "</br>" + "Score of " + stud_name_array[2] + " is " + stud_score_array[2] + ". Percentage : " + stud_percentage_array[2] + "%");
 document.write("<br>" + "<hr>");

// 9. Initialize an array with color names. Display the array elements in your browser.
//  a. Ask the user what color he/she wants to add to the beginning &
//  add that color to the beginning of the array. Display the updated array in your browser.
//  b. Ask the user what color he/she wants to add to the end &
//   add that color to the end of the array. Display the updated array in your browser.
//  c. Add two more color to the beginning of the array. Display the updated array in your browser.
//  d. Delete the first color in the array. Display the updated array in your browser.
//  e. Delete the last color in the array. Display the updated array in your browser.
//  f. Ask the user at which index he/she wants to add a color & color name.
//   Then add the color to desired position/index. . Display the updated array in your browser.
//  g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
//   remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var color_name_array = ["golden", "violet", "cyan"];
document.write("<h3>" + "<b>" + "Original Array" + "</b>" + "</h3>" + "<br>");
document.write(color_name_array + "<br>");

document.write("<h3>" + "<b>" + "Updated Array After 1st User Input In Begining" + "</b>" + "</h3>" + "<br>");
var user_color_1 = prompt("Enter First color name","Color will be displayed in begining");
color_name_array.unshift(user_color_1);
document.write(color_name_array + "<br>");

document.write("<h3>" + "<b>" + "Updated Array After 2nd User Input In End" + "</b>" + "</h3>" + "<br>");
var user_color_2 = prompt("Enter Second color name","Color will be displayed in end");
color_name_array.push(user_color_2);
document.write(color_name_array + "<br>");

document.write("<h3>" + "<b>" + "Updated Array After 3rd & 4th User Input In Begining" + "</b>" + "</h3>" + "<br>");
var user_color_3 = prompt("Enter Third color name","Color will be displayed in begining");
var user_color_4 = prompt("Enter Fourth color name","Color will also be displayed in begining");
color_name_array.unshift(user_color_3,user_color_4);
document.write(color_name_array + "<br>");

document.write("<h3>" + "<b>" + "Array Before Any Type Of Deletion" + "</b>" + "</h3>" + "<br>");
document.write(color_name_array + "<br>");

document.write("<h3>" + "<b>" + "Array After Deletion Of Color On 1st Index " + "</b>" + "</h3>" + "<br>");
color_name_array.shift(color_name_array);
document.write(color_name_array + "<br>");

document.write("<h3>" + "<b>" + "Array After Deletion Of Color On Last Index " + "</b>" + "</h3>" + "<br>");
color_name_array.pop(color_name_array);
document.write(color_name_array + "<br>");

var custom_index_by_user = +prompt("Enter Index number", "range index between 0 to 5");
var custom_color_by_user = prompt("Enter a custom color name");
document.write("<h3>" + "<b>" + "Updated Array After Insertion  Of " + custom_color_by_user.toUpperCase() + " Color On " + custom_index_by_user + " Index " + "</b>" + "</h3>" + "<br>");
color_name_array.splice(custom_index_by_user,0,custom_color_by_user);
document.write(color_name_array + "<br>");

var custom_index_by_user_for_deletion = +prompt("Enter Index number of color you want to delete", "range of index is between 0 to 5");
var custom_no_of_color_by_user = +prompt("Enter, how many colors you want to delete", "Number of colors for deletion");
color_name_array.splice(custom_index_by_user_for_deletion,custom_no_of_color_by_user);
document.write("<h3>" + "<b>" + "Updated Array After Deletion  Of " + custom_no_of_color_by_user + " Colors After " + custom_index_by_user_for_deletion + " Index " + "</b>" + "</h3>" + "<br>");
document.write(color_name_array + "<br>" + "<hr>" );

// 10. Write a program to store student scores in an array & sort 
// the array in ascending order using Array’s sort method.

var scores_of_student = [320,230,120,480];
document.write("Scores of Students: " + scores_of_student + "<br>");
document.write("Ordered Scores Of Students: " + scores_of_student.sort() + "<br>" + "<hr>" );

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities array.

var name_of_cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<b>" + "Cities List: " + "</b>" + "<br>" + name_of_cities + "<br>" + "<br>");
var copied_cities = name_of_cities.splice(0,3);
document.write("<b>" + "Selected Cities List: " + "</b>" + "<br>" + copied_cities + "<br>" + "<hr>" );

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
document.write("<b>" + "Array: " + "</b>" + "<br>" + arr + "<br>" + "<br>");
var single_string = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] ;
document.write("<b>" + "String: " + "</b>" + "<br>" + single_string + "<br>" + "<hr>");

// 13. Create a new array. Store values one by one in such a way that you can access the values
// in the order in which they were stored. (FIFO-First In First Out)

var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("<b>" + "Devices: " + "</b>" + "<br>" + devices + "<br>" + "<br>");

for(var i = 0; i < devices.length; i++){
    document.write("<b>" + "OUT: " + "</b>" + "<br>" + devices[i] + "<br>");
}
document.write("<br>" + "<hr>");

// 14. Create a new array. Store values one by one in such a way that you can access
// the values in reverse order. (Last In-First Out)

var devices_1 = ["keyboard", "mouse", "printer", "monitor"];
document.write("<b>" + "Devices: " + "</b>" + "<br>" + devices_1 + "<br>" + "<br>");

for(var i = devices_1.length - 1; i >= 0 ; i--){
    document.write("<b>" + "OUT: " + "</b>" + "<br>" + devices_1[i] + "<br>");
}
document.write("<br>" + "<hr>");

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier)
// in an array. Display the following dropdown/select menu in your browser using document.write() method:

var phone_manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h3>" + "<b>" + "List Of Phone Manufacturers" + "</b>" + "</h3>" );
    document.write("<select>"
    + "<option>" + phone_manufacturers[0] + "</option>"
    + "<option>" + phone_manufacturers[1] + "</option>"
    + "<option>" + phone_manufacturers[2] + "</option>"
    + "<option>" + phone_manufacturers[3] + "</option>"
    + "<option>" + phone_manufacturers[4] + "</option>"
    + "<option>" + phone_manufacturers[5] + "</option>"
    + "</select>" + "<br>" + "<br>" + "<hr>" );


//                                       CHAPTER - 17 TO 20


// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

var JS_multidimensional_array = [ [], [], [], [] ];

// 2. Declare and initialize a multidimensional array representing the following matrix:

var multidimensional_array_for_matrix = [ [0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1] ];
document.write("<h3>" + "<b>" + "Matrix With Multi-Dimensional Array" + "</b>" + "</h3>" );

document.write(multidimensional_array_for_matrix [0] [0] + " "
    + multidimensional_array_for_matrix [0] [1] + " "
    + multidimensional_array_for_matrix [0] [2] + " "
    + multidimensional_array_for_matrix [0] [3] + "<br>" 
    + multidimensional_array_for_matrix [1] [0] + " "
    + multidimensional_array_for_matrix [1] [1] + " "
    + multidimensional_array_for_matrix [1] [2] + " "
    + multidimensional_array_for_matrix [1] [3] + "<br>" 
    + multidimensional_array_for_matrix [2] [0] + " "
    + multidimensional_array_for_matrix [2] [1] + " "
    + multidimensional_array_for_matrix [2] [2] + " "
    + multidimensional_array_for_matrix [2] [3] + "<br>" + "<br>" + "<hr>");

// 3. Write a program to print numeric counting from 1 to 10.

for(var z = 1; z <= 10; z++){
    document.write(z + "<br>");
}
document.write("<br>" + "<hr>");

// 4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

var table_number = +prompt("Enter a number to show its multiplication table");
var length_of_table = +prompt("Enter length for multiplication table");

document.write("Multiplication table of: " + table_number + "<br>" + "Length: " + length_of_table + "<br>" + "<br>");

for(var x = 1; x <= length_of_table; x++){
    document.write(table_number + " * " + x + " = " + table_number*x + "<br>");
}
document.write("<br>" + "<hr>" + "<br>");

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits_array = ["apple", "banana", "mango", "orange", "strawberry"];
for(var t = 0; t < fruits_array.length; t++){
    document.write(fruits_array[t] + "<br>");
}
document.write("<br>" + "<br>");
for(var e = 0; e < fruits_array.length; e++){
    document.write("Element at index " + e + " is " + fruits_array[e] + "<br>");
}
document.write("<br>" + "<hr>" + "<br>");

// 6. Generate the following series in your browser. See example output.
//  a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//  b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//  c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//  d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//  e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

document.write("<h3>" + "<b>" + "Counting:" + "</b>" + "</h3>" + "<br>" );
for(var a = 1; a < 16; a++){
    document.write(a + ",");
}
document.write("<br>" + "<br>");

document.write("<h3>" + "<b>" + "Reverse Counting:" + "</b>" + "</h3>" + "<br>" );
for(var b = 10; b > 0; b--){
    document.write(b + ",");
}
document.write("<br>" + "<br>");

document.write("<h3>" + "<b>" + "Even:" + "</b>" + "</h3>" + "<br>" );
for(var o = 0; o <= 20; o = o + 2){
    document.write(o + ",");
}
document.write("<br>" + "<br>");

document.write("<h3>" + "<b>" + "Odd:" + "</b>" + "</h3>" + "<br>" );
for(var p = 1; p < 20; p = p + 2){
    document.write(p + ",");
}
document.write("<br>" + "<br>");

document.write("<h3>" + "<b>" + "Series:" + "</b>" + "</h3>" + "<br>" );
for(var q = 2; q <= 20; q = q + 2){
    document.write(q + "K,");
}
document.write("<br>" + "<hr>" + "<br>");

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an array.
//  After searching, prompt the user whether the given item is found in the list or not. Example:

var a_for_array = ["cake", "apple pie", "cookie", "chips", "patties"];
var user_input_for_a_array = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am??");

for(var h = 0; h < a_for_array.length; h++){
    if(a_for_array[h] === user_input_for_a_array){
        document.write(a_for_array[h] + " is/are available at index " + h + " in our bakery");
        break;
    }
    else{
        document.write("We are sorry!!! " + user_input_for_a_array + " is/are not available in our bakery");
        break;
    }
    
}
document.write("<br>" + "<hr>" + "<br>");

// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

var a_array = [24, 53, 78, 91, 12];
document.write("<h3>" + "<b>" + "Array Items:" + "</b>" + "</h3>" + "<br>" );
document.write(a_array + "<br>");
var largest_element_of_array = Math.max.apply(Math, a_array);
document.write("<h3>" + "<b>" + "Largest Element Of Array Is:" + "</b>" + "</h3>" + "<br>" );
document.write(largest_element_of_array + "<br>");
document.write("<br>" + "<hr>" + "<br>");

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

var a_array_1 = [24, 53, 78, 91, 12];
document.write("<h3>" + "<b>" + "Array Items:" + "</b>" + "</h3>" + "<br>" );
document.write(a_array + "<br>");
var smallest_element_of_array = Math.min.apply(Math, a_array);
document.write("<h3>" + "<b>" + "Smallest Element Of Array Is:" + "</b>" + "</h3>" + "<br>" );
document.write(smallest_element_of_array + "<br>");
document.write("<br>" + "<hr>" + "<br>");

// 10. Write a program to print multiples of 5 ranging 1 to 100.

document.write("<h3>" + "<b>" + "Multiples Of 5 Ranging 1 To 100 Are:" + "</b>" + "</h3>" + "<br>" );

for(var n = 1; n <= 100 ; n++){
    if( n % 5 == 0){
        document.write(n + ",");
    }
}
document.write("<br>" + "<br>" + "<hr>" + "<br>");


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


//						Chapter 35 to 38


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


//						Chapter 38 to 42


// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b. 

var ans = 1;
function power(a,b) {
    for(var x = 1; x <= b; x++) {
        ans = ans * a;
    }
    document.write(a + "<sup>" + b + "</sup>" + " is " + ans + "<br>" + "<br>" + "<hr>" );
}
power(2,5);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

function leapYear() {
    var year = +prompt("Enter any year:");
    if(year % 4 == 0) {
        alert(year + " is a leap year");
    }
    else {
        alert(year + " is not a leap year");
    }
}
leapYear();

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function areaOfTriangle(a,b,c) {
    var s = calculateSide();
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    area = area.toFixed(4);
    document.write("Area of triangle is: " + area + "<br>" + "<br>" + "<hr>" );

    function calculateSide() {
        var sides = (a + b + c) / 2;
        return sides;
    }
}
areaOfTriangle(5,10,13);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function mainFunction(sub1,sub2,sub3) {
    var result1 = average();
    var result2 = percentage();
    result1 = result1.toFixed(4);
    result2 = result2.toFixed(4);
    document.write("Average of marks is: " + result1 + "<br>");
    document.write("Percentage is: " + result2 + "%" + "<br>" + "<br>" + "<hr>" );
    
    function average() {
        var avg = (sub1 + sub2 + sub3) / 3;
        return avg;
    }
    
    function percentage() {
        var perc = ((sub1 + sub2 + sub3) / 360) * 100;
        return perc;
    }
}
mainFunction(+prompt("Marks of 1st subject"),+prompt("Marks of 2nd subject"),+prompt("Marks of 3rd subject"));

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function funcIndexOf(value,char) {
    for(var x = 0; x < value.length; x++) {
        if(value[x] == char) {
            var index = x;
            document.write(index + "<br>" + "<br>" + "<hr>" );
            break
        }
    }
}
funcIndexOf(prompt("Enter any string"),prompt("Enter the character to find the index number of in string"));


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowels(sentence) {
    for(var x = 0; x < sentence.length; x++) {
        if(sentence[x] == "a"  || sentence[x] == "e" || sentence[x] == "i" ||  sentence[x] == "o" || sentence[x] == "u") {
            sentence = sentence.slice(0,x) + sentence.slice(x + 1);
        }
    }
    document.write(sentence + "<br>" + "<br>" + "<hr>" );
}
deleteVowels("the crazy brown fox jumps over the lazy dog")

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function findOccurrences() {
    var text = "Pleases read this application and give me gratuity";
    var chars = text.toLowerCase().split("");
    var count = 0;
    
for(var x = 0; x < chars.length - 1; x++) {
    var char1 = chars[x];
    var char2 = chars[x + 1];

    if(isVowelCharacter(char1) && isVowelCharacter(char2)) {
        count++
    }
}
    return count;
}

function isVowelCharacter(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
            default:
                return false;
    }
}
var occurs = findOccurrences();
document.write("Occurrences of any two successive vowels are: " + occurs + "<br>" + "<br>" + "<hr>" );

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

function converter() {
    var distance = +prompt("Enter distance between two cities in kilometers:");
    var result1 = meterConversion(distance);
    var result2 = feetConversion(distance);
    var result3 = inchesConversion(distance);
    var result4 = centimeterConversion(distance);
    document.write("The distance in meters is: " + result1);
    document.write("<br>" + "The distance in feets is: " + result2);
    document.write("<br>" + "The distance in inches is: " + result3);
    document.write("<br>" + "The distance in centimeters is: " + result4 + "<br>" + "<br>" + "<hr>" );
    
    function meterConversion(km) {
        var meter = km * 1000;
        return meter;
    }
    function feetConversion(km) {
        var feet = km * 3281;
        return feet;
    }
    function inchesConversion(km) {
        var inch = km * 39370;
        return inch;
    }
    function centimeterConversion(km) {
        var cm = km * 100000;
        return cm;
    }
}
converter();

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

var overTime = +prompt("Enter the overtime you have worked in hours:");
var payment = overTime * 12;
document.write("Your overtime payment is: " + payment + "<br>" + "<br>" + "<hr>" );

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

var withdraw = +prompt("Enter amount to withdraw");
var hundredNotes = Math.floor((withdraw / 100));
var fiftyNotes = Math.floor(((withdraw % 100) / 50));
var tenNotes = Math.floor((((withdraw % 100) % 50) / 10));
var remain = Math.floor((((withdraw % 100) % 50) % 10));
document.write("Amount to withdraw: " + withdraw + "<br>");
document.write("You will have " + hundredNotes + " hundred notes " + fiftyNotes + " fifty notes " + tenNotes + " ten notes.");
document.write("<br>" + "Remaining amount will be: " + remain + "<br>" + "<br>" + "<hr>" );


//						Chapter 43 to 48


// 1. Show an alert box on click on a link.

// 				This task is done using html.

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function message() {
    alert("Thanks for purchasing a phone from us.")
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function deleteRow(id) {
    var table = document.getElementById("table");
    var rowNo = document.getElementById(id);
    table.deleteRow(rowNo.rowIndex);
}  

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function changeImage(id,source) {
    var change = document.getElementById(id);
    change.src = source;
}

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

function increment() {
    var counter = document.getElementById("counter");
    counter.value++;
}
function decrement() {
    var counter = document.getElementById("counter");
    counter.value--;
}


//						Chapter 48 to 52


// 1. Create a signup form and display form data in your web
// page on submission.

function SignUp() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var pass = document.getElementById("pswd");
    document.write("First Name: " + fname.value + "<br>");
    document.write("Last Name: " + lname.value + "<br>");
    document.write("Email - Id: " + email.value + "<br>");
    document.write("Password: " + pass.value);
    fname.value = "";
    lname.value = "";
    email.value = "";
    pass.value = "";
}

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function readMore() {
    var text = document.getElementById("text");
    var moreText = document.getElementById("moreText");
    text.innerHTML  = moreText.innerHTML;
}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

function deleteRow(id) {
    var table = document.getElementById("stdTable");
    var rowNo = document.getElementById(id);
    table.deleteRow(rowNo.rowIndex);
}

function editRow(name,fname,rollNum) {
    var name = document.getElementById(name);
    var fname = document.getElementById(fname);
    var rollNum = document.getElementById(rollNum);
    var edit = document.getElementById("fields");
    var input1 = document.getElementById("inp1");
    var input2 = document.getElementById("inp2");
    var input3 = document.getElementById("inp3");
    edit.hidden = false;
    input1.value = name.innerHTML;
    input2.value = fname.innerHTML;
    input3.value = rollNum.innerHTML;
    name = input1.value;
    fname = input2.value;
    rollNum = input3.value;     
}

function editDetails() {
    var edit = document.getElementById("fields");
    edit.hidden = true;
}


//						Chapter 53 to 58


// 1.Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.

function clickImg(myImg,modal,modalImg,caption) {
    var myImg = document.getElementById(myImg);
    var modal = document.getElementById(modal);
    var modalImg = document.getElementById(modalImg);
    var caption = document.getElementById(caption);
    modal.style.display = "block";
    modalImg.src = myImg.src;
    caption.innerHTML = myImg.alt;
}

function closeModal(value) {
    var close = document.getElementById(value);
    close.style.display = "none"
}

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.

var fontSize = 1;
function zoomIn() {
    fontSize += 0.1;
    var text = document.getElementById("text");
    text.style.fontSize = fontSize + "em";
}

function zoomOut() {
    fontSize -= 0.1;
    var text = document.getElementById("text");
	text.style.fontSize = fontSize + "em";
}


//						Chapter 58 to 67


// 1.Consider you have following code snippet:
// (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i.Get element of id “main-content” and assign them in a variable.
// ii.Display all child elements of “main-content” element.
// iii.Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// 		Task1 (i)
var main = document.getElementById("main-content");

// 		Task1 (ii)
console.log(main.children);

// 		Task1 (iii)
var render0 = document.getElementsByClassName("render")[0];
var render1 = document.getElementsByClassName("render")[1];
var render2 = document.getElementsByClassName("render")[2];
var render3 = document.getElementsByClassName("render")[3];
var render4 = document.getElementsByClassName("render")[4];
document.write(render0.innerHTML + "<br>");
document.write(render1.innerHTML + "<br>");
document.write(render2.innerHTML + "<br>");
document.write(render3.innerHTML + "<br>");
document.write(render4.innerHTML);

// 		Task1 (iv)
var input1 = document.getElementById("first-name");
input1.value = "Alex";

// 		Task1 (v)
var input2 = document.getElementById("last-name");
var input3 = document.getElementById("email");
input2.value = "Bank";
input3.value = "alexbank@gmail.com";

// 2. use HTML code of question 1 and show the result on browser.
// i.What is node type of element having id “form-content”.
// ii.Show node type of element having id “lastName” and its child node.
// iii.Update child node of element having id “lastName”.
// iv.Get First and last child of id “main-content”.
// v.Get next and previous siblings of id “lastName”. 
// vi.Get parent node and node type of element having id “email”

// 		Task2 (i)
var form = document.getElementById("form-content");
document.write(form.nodeType);

// 		Task2 (ii)
var lname = document.getElementById("lastName");
console.log(lname.nodeType);
console.log(lname.childNodes);

// 		Task2 (iii)
var textnode = document.createElement("h1");
var lname = document.getElementById("lastName");
lname.replaceChild(textnode, lname.childNodes[0]);
console.log(lname.childNodes);

// 		Task2 (iv)
var main = document.getElementById("main-content");
console.log(main.firstChild);
console.log(main.lastChild);

// 		Task2 (v)
var element = document.getElementById("lastName");
console.log(element.previousSibling);
console.log(element.nextSibling);

// 		Task2 (vi)
var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);


//						THE END