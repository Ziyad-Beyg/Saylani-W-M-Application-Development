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

var 5;
var 123name;
var ?b;
var my name;
var "age";

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




//                                              THE END