/*
Comparison statement
Bolean (true, false)
Strict equality operation (===)
Less than a greater than (>, <)
Greater than equal to (>=)
Less than or equal to (<=)
Not equal to (!==)
if statement
    if(condition){

    }
*/







/*
("20" === 20
false
"20" === "20"
true)
(100 > 80
true
80 > 100
false)
(20 < 30
true
30 < 20
false)
(100 > 100
false
100 === 100
true
100 >= 100
true)
()
*/

// If statement 

var studentName = prompt("Tell your name") ;
var studentid = "325ui89" ;
var attendence = prompt("Tell yr attendence") ;
var totalclasses = 30 ;
var studentAttendencePercentage = attendence / totalclasses * 100 ;

// console.log(studentAttendencePercentage);

if (studentAttendencePercentage > 70){
    alert(studentName + "'s attendence is Ok"); 
}   else if (studentAttendencePercentage > 50) {
    alert('You need to improve');
}
