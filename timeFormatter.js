function timeFormatter(myTime) {

	timeCheckerMessage.innerHTML = "";

	//If delete key or backspace key is press clear text box
	var key = event.keyCode || event.charCode;
    if( key == 8 || key == 46 ){
		myTime.value = "";
	}
	
	//Chars allowed
	var ValidChars = /[^0-9^:^A^P^ ]/gi
	if(ValidChars.test(myTime.value)) {
		myTime.value = myTime.value.replace(ValidChars,"");
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
		}
	}
	
	//If not numeric
	if(myTime.value.length == 2){
		if(isNaN(myTime.value)){
			myTime.value = myTime.value;
		}
	}

	//Checks if hour is numeric
	if(myTime.value.length == 2){
		if(!isNaN(myTime.value.substring(0, 2)) == false){
			myTime.value = myTime.value.substring(0, myTime.value.length-1);
		} else {
			myTime.value = myTime.value + ":";
		}
	}
	
	//Checks if minutes is numeric
	if(myTime.value.length == 5){
		if(!isNaN(myTime.value.substring(4, 5)) == false){
			myTime.value = myTime.value.substring(0, myTime.value.length-2);
		}
	}

	//Clear text box if hour is greater the 12
	if(myTime.value.length == 5){
		if(parseInt(myTime.value.substring(3).trim()) >= 60){
			myTime.value = myTime.value.substring(0,3);
			return;
		} 
	}	
	
	//After minutes add space
	if(myTime.value.length == 5){
		myTime.value = myTime.value + " ";
    }	
	
	//Add PM when user press p or a and remove anything thats not p or a
	if(myTime.value.length > 6){
		if(key == 80){
		myTime.value = myTime.value.replace(/p/ig,"PM");
		myTime.blur();		
		} else if(key == 65){
		myTime.value = myTime.value.replace(/a/ig,"AM");
		myTime.blur();
		} else {
		myTime.value = myTime.value.substring(0, myTime.value.length-1);
		}		
	}
	

}

function timeChecker(myTime) {
	if (!isNaN(myTime.value.substring(0, 2)) == false){
		myTime.value = "";
		timeCheckerMessage.innerHTML = "Please enter valid time format"
	}
	if (!isNaN(myTime.value.substring(4, 5)) == false){
		myTime.value = "";
		timeCheckerMessage.innerHTML = "Please enter valid time format"
	}
	if (myTime.value.substring(6, 8) == "PM"){

	} else if (myTime.value.substring(6, 8) == "AM") {
	} else {
		myTime.value = "";
		timeCheckerMessage.innerHTML = "Please enter valid time format"
	}
		
}