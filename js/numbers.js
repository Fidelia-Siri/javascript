function checkPrime(){
    var num = getUserInput();
    flag = true;
    if(num < 2){
        flag = false;
    }
    for(var i = 2; i <= Math.sqrt(num); i++){
        if( num % i == 0){
            flag = false;
            break;
        }
    }
if(flag){
    showResult(" Given Number is : "+num+" Prime");
}else{
     showResult(" Given Number "+num+" Not a Prime ");
    }
}

function factorial(){
    var num = getUserInput();
    var res = 1;
    for(var i = 2; i <= num; i++){
        res *= i;
    }
    showResult("Factorial of "+num+" is :"+res);
}

function factors(){
    var num = getUserInput();
    var output = " ";
    for(var i = 1; i <= num; i++){
        if(num % i == 0){
            output += i+ " ";
        }
    }
    showResult("Factors of Number "+num+" is :"+output);
}

function fibonacci(){
    var num = getUserInput();
    var output = "";
    if(num == 1){
        output += "0";
    }else if(num == 2){
        output += "0 1";
    }else{
        var a = 0, b = 1;
        output += "0 1";
        for(var i = 3; i <= num; i++){
            c = a + b;
            output += " "+c;
            a = b;
            b = c;
        }
    }
     showResult("Fibonacci Series of "+num+" is :"+output);
}

function revNumber(){
    var num = getUserInput();
    var r;
    var rev = 0;
    var num2 = num;
    while(num != 0){
        r = num % 10;
        rev = rev * 10 + r;
        num = Math.floor(num / 10);
    }

    showResult("Reverse Number of "+num2+" is :"+rev);
}

function palindrome(){
    var num = getUserInput();
    var r;
    var rev = 0;
    var num2 = num;
    while(num != 0){
        r = num % 10;
        rev = rev * 10 + r;
        num = Math.floor(num / 10);
    }
if(num2 == rev){
       showResult("Given Number "+num2+" is Palindrome"); 
    }else{
    showResult("Given Number "+num2+" is not Palindrome");
        }
            }

function sumDigits(){
    var num = getUserInput();
    var sum = 0;
    var num2 = num;
    while(num != 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    showResult("Sum of Digits of "+num2+" is :"+sum);
}

function sumSingleDigit(){
    var num = getUserInput();
    var sum = num;
    var num2 = num;
    while(num > 9){
        sum = Math.floor(num / 10) + Math.floor(num % 10);;
        num = sum;
    }
    showResult("Sum in Single Digit of "+num2+" is :"+sum);
}
    
function getUserInput(){
  var num = document.getElementById("num").value;
    return num;
}

function showResult(message){
  document.getElementById("result").innerHTML="<h4>"+message+"</h4>";
}
