//  Question 1
console.log("QUESTION 1");
let age = 18;

console.log("age:",age);
if(age>60){
    console.log("SENIOR");
}
else if(age>20){
    console.log("ADULT");
}
else if(age>13){
    console.log("Teenager")
}
else{
    console.log("child");
}

//question 2
console.log("QUESTION 2");
let day="wednesday";
let price;
let discount = 2;
if(age < 18){
    price = 8;
    if(day === "wednesday") price = 12-discount;
}
else{
    price = 12;
    if(day === "wednesday") price = 12-discount;
}
console.log("price :",price);

//QUESTION 3
console.log("QUESTION 3");
let petCategory = "dog";
let petAge = 1;
if(petCategory === "dog" && petAge < 2) console.log("puppy food");
else if(petCategory === "cat" && petAge > 5) console.log("senior cat food");

//question 4
console.log("QUESTION 4");
let passwordLength = 10;
if(passwordLength > 10) console.log("strong password");
else if(passwordLength > 6) console.log("medium password");
else console.log("weak password");

//Switch-Case
console.log("SWITCH CASE STARTS");
console.log("QUESTION 1");
let monthNumber = 4;
switch(monthNumber){
    case 1:
       console.log("Jan");
       break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Input");
        break;
}

console.log("QUESTION 2");
let n1 = 4;
let n2 = 3;
let res;
let op = "/";
switch(op){
    case "+":
        res = n1+n2;
        break;
    case "-":
        res = n1-n2;
        break;
    case "*":
        res = n1*n2;
        break;
    case "/":
        if(n2 == 0){ console.log("invalid input"); break;}
        res = n1/n2;
        break;
}
console.log("result : ",res);

console.log("QUESTION 3")
    