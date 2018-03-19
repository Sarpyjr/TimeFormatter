![Alt text](timeFormatter_Logo_small.png?raw=true "Title")

# timeFormatter
A **JavaScript function** to format time as you type it in (12 hour format) with AM/PM.

I've been looking for something that would format time in the input field as you type, but nothing fancy like jQuery does with their time pickers.

By no means I'm good at coding in JavaScript and there could be a better way of doing what I did but since I couldn't find it, I made and it works for me.

This code was helpful for me since Internet Explorer 11 doesn't support `<input type="time"></input>`


### HTML Code ###
```html
<input type="text" maxlength="8" onkeyup="timeFormatter(this)" onfocusout="timeChecker(this)" onFocus="javascript:this.value=''" placeholder="12:35 PM">
<p id="timeCheckerMessage"></p>
```

### timeFormatter JavaScript Code ###
```javascript
function timeFormatter(myTime) {

//If delete key or backspace key is press clear text box
var key = event.keyCode || event.charCode;
if( key == 8 || key == 46 ){
    myTime.value = "";
}

//Chars allowed
var ValidChars = /[^0-9^:^A^P^a^p^ ]/gi
if(ValidChars.test(myTime.value)) {
    myTime.value = myTime.value.replace(ValidChars,"");
    timeCheckerMessage.innerHTML = "Please enter valid time format, example 12:59 PM.";
}
    
//Pad 0 and add :
if(myTime.value.length == 1){
    if(myTime.value.trim() == 2 || myTime.value.trim() == 3 || myTime.value.trim() == 4 || myTime.value.trim() == 5 || myTime.value.trim() == 6 || myTime.value.trim() == 7 || myTime.value.trim() == 8 || myTime.value.trim() == 9){
        myTime.value = "0" + myTime.value + ":";
        }
}

//If 1st Char is not numeric
if(myTime.value.length == 1){
    if(isNaN(parseInt(myTime.value))){
        myTime.value = "";
        timeCheckerMessage.innerHTML = "Please enter 12 hour format.";
    }
}

//If not numeric
if(myTime.value.length == 2){
    if(isNaN(myTime.value)){        
        myTime.value = myTime.value;
        timeCheckerMessage.innerHTML = "Please enter 12 hour format.";       
    }
}

//Checks if hour is numeric
if(myTime.value.length == 2){
    if(!isNaN(myTime.value.substring(0, 2)) == false){
        myTime.value = myTime.value.substring(0, myTime.value.length-1);        
    } else {
        if(parseInt(myTime.value.substring(0, 2).trim()) >= 13){
            myTime.value = myTime.value.substring(0, myTime.value.length-2);
            timeCheckerMessage.innerHTML = "Please enter 12 hour format.";
            return;
        } else {
            myTime.value = myTime.value + ":";
        }			
    }
}

//Check if hour and : is located
if(myTime.value.length == 3){
    if(myTime.value.substring(2, 3) != ":"){
        myTime.value = "";
        timeCheckerMessage.innerHTML = "Please enter 12 hour format.";
        return;
    }
}

//Checks if minutes is numeric
if(myTime.value.length == 5){
    if(!isNaN(myTime.value.substring(3, 5)) == false){
        myTime.value = myTime.value.substring(0, myTime.value.length-2);
        timeCheckerMessage.innerHTML = "Please enter valid minute format 00 - 59.";
    } 
}

//Checks if minutes are higher then 59
if(myTime.value.length == 5){
    if(parseInt(myTime.value.substring(3, 5).trim()) >= 60){
        myTime.value = myTime.value.substring(0, myTime.value.length-2);
        timeCheckerMessage.innerHTML = "Please enter valid minute format 00 - 59.";
    }
}

//After minutes add space
if(myTime.value.length == 5){
    myTime.value = myTime.value + " ";
}

//Check if hour and : is located
if(myTime.value.length == 6){
    if(myTime.value.substring(5, 6) != " "){
        myTime.value = myTime.value.substring(0, myTime.value.length-3);
        timeCheckerMessage.innerHTML = "Please enter valid minute format 00 - 59.";
    }
}

//Add PM when user press p or a and remove anything thats not p or a
if(myTime.value.length > 6){
    if(myTime.value.substring(6, 8) == "p" || myTime.value.substring(6, 8) == "P"){	
        if(myTime.value.substring(6, 8) == "p"){
            myTime.value = myTime.value.replace("p","PM");
            myTime.blur();
            timeCheckerMessage.innerHTML = "";	
        }
        if(myTime.value.substring(6, 8) == "P"){
            myTime.value = myTime.value.replace("P","PM");
            myTime.blur();	
            timeCheckerMessage.innerHTML = "";
        }			
    } else if(myTime.value.substring(6, 8) == "a" || myTime.value.substring(6, 8) == "A"){
        if(myTime.value.substring(6, 8) == "a"){
            myTime.value = myTime.value.replace("a","AM");
            myTime.blur();
            timeCheckerMessage.innerHTML = "";	
        }
        if(myTime.value.substring(6, 8) == "A"){
            myTime.value = myTime.value.replace("A","AM");
            myTime.blur();
            timeCheckerMessage.innerHTML = "";	
        }			
    } else {
    myTime.value = myTime.value.substring(0, myTime.value.length-1);
    timeCheckerMessage.innerHTML = "Please type 'a' for AM or 'p' for PM.";
    }		
}


}

function timeChecker(myTime) {
if (!isNaN(myTime.value.substring(0, 2)) == false){
    myTime.value = "";
    timeCheckerMessage.innerHTML = "Please enter valid time format, example 12:59 PM.";
}
if (!isNaN(myTime.value.substring(4, 5)) == false){
    myTime.value = "";
    timeCheckerMessage.innerHTML = "Please enter valid time format, example 12:59 PM.";
}
if (myTime.value.substring(6, 8) == "PM"){

} else if (myTime.value.substring(6, 8) == "AM") {
} else {
    myTime.value = "";
    timeCheckerMessage.innerHTML = "Please enter valid time format, example 12:59 PM.";
}
    
}
```

## Demo
http://timeformatter.sarpyjr.com/
