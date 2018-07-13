function checkNumber() {
    var num = document.getElementById("num").value;
    var message;
    if(num % 2 ==0){
        message = "Number :"+num+" is Even";
    }else{
        message = "Number:"+num+" is Odd";
        }
document.getElementById("res").innerHTML=message;
}

function billclaculartor(){
    var units=gocumentGetElementBYId("units").value;
    var min_amount=50;
    var total_amount=0;
    var amount=0;
    
    if (units>=0 && units<100){
        amount=5*units;
    }else if (units>=100 && units<500){
        amount=6*units;
     }
        else
            {
             amount=10*units;
                }
        
        total_amount=min_amount + amount;
        message="total bill amount:"+total_amount;
        document.getElementById("res").innerHTML=message;5
}