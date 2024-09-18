// 1- Write a program that allow to user enter number then printit

// var age = window.prompt("Enter Your Age");
// window.alert(age);

//2 Write a program that take number from user then print yes if that numbe0r can divide by 3 and 4 otherwise print no
// var number = window.prompt("Enter Your Number")
// number =Number(number)
// if(number%3==0&&number%4==0){
//     window.alert("Yes")
// }else{
//     window.alert("NO")
// }

// 3- Write a program that allows the user to insert 2 integers then print the max

// var number1 =Number(window.prompt("Enter Your Number1"));
// var number2 =Number(window.prompt("Enter Your Number2"));

// if(number1>number2){
// window.alert(number1)
// }else{
//     window.alert(number2)
// }


// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var number=Number(window.prompt("Enter Your Number"));
// if(number<0){
//     window.alert("negative")
// }else{
//     window.alert("positive")
// }

// 5- Write a program that take 3 integers from user then print the max element and the min element.


// var number1 =Number(window.prompt("Enter Your Number1"));
// var number2 =Number(window.prompt("Enter Your Number2"));
// var number3 =Number(window.prompt("Enter Your Number3"));

// if(number1>number2&&number1>number3)
//     {window.alert("max is :"+number1)

//     }else if(number2>number1&&number2>number3){
//         window.alert("max is :"+number2)
//     }else if(number3>number1&&number3>number2){
//         window,alert("max is :"+number3)
//     }
//     if(number1<number2&&number1<number3){
//         window.alert("min is "+number1)
//     }else if(number2<number1&&number2<number3){
//         window.alert("min is :"+number2)
//     }else if(number3<number1&&number3<number2){
//         window.alert("min is :"+number3)
//     }

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var number =Number(window.prompt("Enter Your Number"));
// if(number%2==0){
//     window.alert(" number " +number+" is Even ")
// }else
// {
//     window.alert(" number " +number+ " is Odd ")

// }

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var char = window.prompt("Enter Your Char")
// switch(char){
//     case`a`:
//     case`A`:
//     case`e`:
//     case`E`:
//     case`I`:
//     case`i`:
//     case`o`:
//     case`O`:
//     case`u`:
//     case`U`:
//     window.alert("vowel");
//     break;
//     default:
//         window.alert("consonant");
//         break;
// }

// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to that’s number

// var number = Number(window.prompt("Enter Number: "))
// for (var i =1; i<=number;i++)
// {
//     window.alert(i)
// }

// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.

// var number = Number(window.prompt("Enter Number: "))

// for(var i=1;i<=12;i++){
//     window.alert(i*number)
// }

// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number

// var number = Number(window.prompt("Enter Number: "))
// for(var i= 1;i<=number;i++){
//     if(i%2==0){
//         window.alert(i);
//     }

// }

// 12- Writeaprogramthattaketwointegersthenprintthepower

// var number = Number(window.prompt("Enter Number: "))
// var power = Number(window.prompt("Enter power: "))
// var result = number**power
// window.alert(result)

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

// var total =0;
// for(var i=0;i<5;i++){
//     total+=Number(window.prompt("Enter Your Sublect"+(i+1)))
// }

// window.alert("total Maeks = " +total);
// window.alert("Avg = "+total/5)
// window.alert("persentage = "+total/500*100)

// 13-Write a program to input month number and print number of days in that month.

// var monthNumber = window.prompt("Enter Month Number");
// if(monthNumber==1||monthNumber==3||monthNumber==5||monthNumber==7||monthNumber==8||monthNumber==10||monthNumber==12){
//     window.alert("31");
// }else if (monthNumber==2){
//     window.alert("28 days (29 days in a leap year) ")

// }else if(monthNumber==4||monthNumber==6||monthNumber==9||monthNumber==11){
//     window.alert("30")
// }

// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// var PhysicsMark=Number(window.prompt("Enter Mark of Physics Subject"));
// var ChemistryMark=Number(window.prompt("Enter Mark of Chemistry Subject"));
// var BiologyMark=Number(window.prompt("Enter Mark of Biology Subject"));
// var MathematicsMark=Number(window.prompt("Enter Mark of Mathematics Subject"));
// var ComputerMark=Number(window.prompt("Enter Mark of Computer Subject"));

// var percentage =(PhysicsMark+ChemistryMark+BiologyMark+MathematicsMark+ComputerMark)/500*100;

// if(percentage>=90){
//     window.alert("Grade A")
// }else if(percentage>=80){
//     window.alert("Grade B")
// }
// else if(percentage>=70){
//     window.alert("Grade C")
// }else if(percentage>=60){
//     window.alert("Grade D")
// }
// else if(percentage>=40){
//     window.alert("Grade E")
// }else if(percentage<40){
//     window.alert("Grade F")
// }

// 15- Write a program to print total number of days in month

// var monthNumber = window.prompt("Enter Month Number") 
// switch(monthNumber){
//     case"1":
//     case"3":
//     case"5":
//     case"7":
//     case"8":
//     case"10":
//     case"12":
//     window.alert("31");
//     break;
//     case"4":
//     case"6":
//     case"9":
//     case"11":
//     window.alert("30");
//     break;
//     case"2":
//     window.alert("28 days (29 days in a leap year) ")
//     break;
// }

// 16- Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt("Enter Your Char")

// if(char=="a" || char=="e" || char=="u"||char=="i"){
//     window.alert("vowel")
// }else{
//     window.alert("consonant")
// }

// 17- Write a program to find maximum between two numbers

// var number1=window.prompt("Enter  First Number ")
// var number2=window.prompt("Enter  second Number ")

// switch (number1>number2) {
//     case true:
//         window.alert("number 1")
//         break;
//         case false:
//         window.alert("number2")
// }

// 18- Write a program to check whether a number is even or odd
// var number =window.prompt("Enter Number")
// switch(number%2==0){
//     case true:
//         window.alert("Even");
//         break;
//         case false:
//             window.alert("Odd");
//             break;
// }

// 19- Write a program to check whether a number is positive or negative or zero
// var number =Number(window.prompt("Enter Number"))
// switch(number>0){
// case true:
//     window.alert("number is positive")
//     break;
//     case false:
//         switch(number==0){
//             case true:
//                 window.alert("Zero")
//                 break;
//                 case false:
//                     window.alert("negative")
//                     break;
//         }
//         break;
// }

// 20- Write a program to create Simple Calculator
// var number1=Number(window.prompt("Enter  First Number "));
// var sign=window.prompt("Enter  Your Sign ");
// var number2=Number(window.prompt("Enter  second Number "));


// switch(sign){
// case`+`:
// window.alert(number1+number2);
// break;
// case`-`:
// window.alert(number1-number2);
// break;
// case`*`:
// window.alert(number1*number2);
// break;
// case `/`:
//     window.alert(number1/number2);
//     break;
// }

