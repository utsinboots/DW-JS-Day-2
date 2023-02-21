function checkAge(){
    const ageElement = document.getElementById("age")       //to shorten the code 
    const resultElement = document.getElementById("result")     //to shorten the code

    var age = parseInt(document.getElementById("age").value)
    if (age < 18){
        //document.getElementById("result").innerHTML = "<b>You are NOT eligible to vote</b>";
        resultElement.innerHTML = "<b>You are NOT eligible to vote</b>";
    }
    else{
        //document.getElementById("result").innerHTML = "<b>You are eligible to vote</b>";
        resultElement.innerHTML = "<b>You are eligible to vote</b>";
    }
    //document.getElementById("age").value = ""
    ageElement.value = ""
 }

 function getFullDay()
 {
    const dayElement = document.getElementById("day")
    const resultElement = document.getElementById("result")

 /*   switch(dayElement.value)
    {
        case "SUN":
            resultElement.innerHTML = "Sunday";
            break;
        case "MON":
            resultElement.innerHTML = "Monday";
            break;
        default:
            resultElement.innerHTML = "Invalid day";       
    }
*/
    switch(dayElement.value.toLowerCase()) //.toLowerCase() - all letters are converted to lower
    {
        case "monday":          //can shorten this way if cases are the same
        case "tuesday":
        case "wednesday":
        case "thursday":
            resultElement.innerHTML = "It's the WeekDay";
            break;
        case "friday":
        case "saturday":
        case "saturday":
            resultElement.innerHTML = "It's the WEEKEND";      
            break;      
        default:
            resultElement.innerHTML = "Invalid Day"; 
    }
 }

 function checkAgeGroup()
 {
    const ageElement = document.getElementById("ageGroup")       //to shorten the code 
    const resultElement = document.getElementById("result")     //to shorten the code

    var age = parseInt(document.getElementById("ageGroup").value)
    if (age >= 0 && age <= 18){
        resultElement.innerHTML = "A";
    }
    else if (age > 18 && age <= 35){
        resultElement.innerHTML = "B";
    }
    else if (age > 35 && age <= 60){
        resultElement.innerHTML = "C";
    }
    else if (age > 60){
        resultElement.innerHTML = "D";
    }
    else {
        resultElement.innerHTML = "Invalid age";
    }
 ageElement.value = ""
}

function agePerson(){
    const ageElement = document.getElementById("agePerson")       //to shorten the code 
    const resultElement = document.getElementById("result")     //to shorten the code

    var age = parseInt(document.getElementById("agePerson").value)
    if (age < 18){
        resultElement.innerHTML = "child";
    }
    else if (age >= 18 && age < 60){
        resultElement.innerHTML = "young";
    }
    else if (age > 60){
        resultElement.innerHTML = "old";
    }
 ageElement.value = ""
}
