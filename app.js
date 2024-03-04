// // Q1
// var names=["ANILA"]
// document.write(names + "<br>")
// // Q2
// names.push("ALLAH RAKHA")
// document.write(names + "<br>")
// // Q4
// var number=[120]
// document.write(number + "<br>")
// // Q5
// var data=[true]
// console.log(data)
// // Q6
// var mix=["ANILA" + 150 +true]
// document.write(mix)
// Q7

// Creating an Array and Initializing with Values
// let courses = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M. Phil.", "PhD"];;

// // Accessing Array Elements
// console.log(courses[0]);
// console.log(courses[1]);
// console.log(courses[2]);
// console.log(courses[3]);
// console.log(courses[4]);
// console.log(courses[5]);
// console.log(courses[6]);
// console.log(courses[7]);
// Q8
// Student names array
// var studentNames = ['John', 'Alice', 'Bob'];

// // Scores array for each student
// var scores = [420, 380, 450]; 

// // Total marks per student (assumed to be 500 for each)
// var totalMarks = 500;

// // Calculate percentage for each student
// var percentages = ["69%"];
// for (var i = 0; i < scores.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;
//     percentages.push(percentage.toFixed(2)); 
// }

// // Display scores and percentages
// document.write("Student Scores and Percentages:");
// for (var j = 0; j < studentNames.length; j++) {
//     document.write(studentNames[j] + ": Score - " + scores[j] + ", Percentage - " + percentages[j] + "%");
// }
// Q9
// var colors = ["Red", "Green", "Blue"];
        
// // Display the original array
// document.write("<b>Original Array:</b> " + colors.join("Red ") + "<br>");

// // a. Add color to the beginning of the array
// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);

// // Display updated array
// document.write("<b>After adding color to the beginning:</b> " + colors.join("Green") + "<br>");

// // b. Add color to the end of the array
// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);

// // Display updated array
// document.write("<b>After adding color to the end:</b> " + colors.join("Blue ") + "<br>");

// // c. Add two more colors to the beginning of the array
// colors.unshift("Yellow", "Orange");

// // Display updated array
// document.write("<b>After adding two more colors to the beginning:</b> " + colors.join("Yellow") + "<br>");

// // d. Delete the first color in the array
// colors.shift();

// // Display updated array
// document.write("<b>After deleting the first color:</b> " + colors.join("Orange ") + "<br>");

// // e. Delete the last color in the array
// colors.pop();

// // Display updated array
// document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br>");

// // f. Add color at user-defined position/index
// var indexToAdd = prompt("Enter the index to add color:");
// var colorToAddIndex = prompt("Enter the color name to add at index " + indexToAdd + ":");
// colors.splice(indexToAdd, 0, colorToAddIndex);

// // Display updated array
// document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");

// // g. Delete color(s) from user-defined position/index
// var indexToDelete = prompt("Enter the index to delete color(s):");
// var numToDelete = prompt("Enter the number of colors to delete from index " + indexToDelete + ":");
// colors.splice(indexToDelete, numToDelete);

// // Display updated array
// document.write("<b>After deleting color(s) from index " + indexToDelete + ":</b> " + colors.join(", ") + "<br>");
//  Q10
// var scores=["320"+","+"230"+","+"480"+","+"120"]
// document.write("scores of students"+ scores+"<br>")
// scores.splice(0,4 ,"120","230","320","480")
// document.write("Ordered the scores of students "+scores)
// // Q11
// var city=["karachi"+","+"Islamabad"+","+"Qutta"+"Lahore"+","+"Peshawer"]
// document.write("Cities List:"+"<br>"+city +"<br>")
// city.slice("1,2")
// document.write("Selected Cities List:"+"<br>" +city +"<br>")
// // Q12
// var arr = ["This "," is ", "my "," cat"];
// document.write(arr +"<br>")
// var arr2=["This is my cat"]
// document.write(arr2 +"<br>")

// Q13



















