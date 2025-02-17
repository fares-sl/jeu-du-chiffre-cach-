const buttom=document.querySelector("#b");
buttom.addEventListener('click',function(){
    const difficulty=prompt("select difficulty: easy,medium or hard");
    let maxAttempts;
    let maxValue;
    if(difficulty==null){return;}
    switch(difficulty){
        case "easy":
            maxAttempts=10;
            maxValue=40;
            break;
        case "medium":
            maxAttempts=7;
            maxValue=70;
            break;
        case "hard":
            maxAttempts=5;
            maxValue=100;
            break;
        default:
            alert("choix non valide");
            return;
    }
    const randomValue=Math.ceil(Math.random()*maxValue);
    console.log(randomValue);
    let shosenValue;
    var attempts=1;
    while(maxAttempts!=0){
        shosenValue=prompt("pick a value between 0 and "+maxValue);
        if(shosenValue==null){return;}
        shosenValue=parseInt(shosenValue);
        if(shosenValue==randomValue){
            alert("congratulations,you found the secret number in "+attempts+" attempt"+(attempts==1?"":"s"));
            return;
        }
        else if(shosenValue<randomValue){
            alert("the number you are looking for is bigger");
        }
        else{
            if(maxAttempts!=1){alert("the number you are looking for is smaller");}
        }
        attempts++;
        maxAttempts--;

    }
    
        alert("you lost the match,the number you're looking for is "+randomValue);
}
)