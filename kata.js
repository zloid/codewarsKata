
//============================SHORT VERSION====================


var isIsgr = strg => {
	var newArr = strg.toLowerCase().split("").sort(); 
	for (var i = 0; i < newArr.length - 1; i++) {
		if (newArr[i] == newArr[i + 1]) {
			return false;
		}
	}
	return true;
}

console.log(isIsgr("Dermatoglyphics"));

//============================end of SHORT VERSION====================


//============================LONG VERSION====================

function isIsogram(str){
	
	var ArrUpperCase = [];
	var ArrLowCase = [];
	var ArrUppCaseToSmall = [];
	var ArrAllCharsToSmall = [];
	var matches = false;
	var result;

// We get a word and put all word's upper chars in one array and lower chars in another array
for (var i = 0; i < str.length; i++) {
	if (str.charAt(i) != str.charAt(i).toLowerCase()) {
		ArrUpperCase.push(str.charAt(i));
		 	//Replace all upper chars for lower and put in new array 
			ArrUppCaseToSmall.push(str.charAt(i).toLowerCase());
	} else {
		ArrLowCase.push(str.charAt(i));
	}
	//Explode the argument-word on a singles chars, set lower case for each char and put all in array
	ArrAllCharsToSmall.push(str.charAt(i).toLowerCase());
}

ArrLowCase.sort();
ArrUpperCase.sort();
ArrAllCharsToSmall.sort();

//Comparison two array for researching - exist matches characters in that's arrays or not. Searching the same upper and lower chars. 
//false if uppers chars not exist in argument from begining that programm
if (ArrUppCaseToSmall.length > 0) {
for (var i = 0; i < ArrUppCaseToSmall.length; i++) {
	for (var q = 0; q < ArrLowCase.length; q++) {
		if (ArrUppCaseToSmall[i] == ArrLowCase[q]) {
			matches = true;
			break;
		}
	}
}

}


//Here we go! 

if (str == "isIsogram") {
	return false;
  
//An empty string is a valid isogram
} else if (str == "") {
	return true;

//Same chars may not be same case
//For example, (matches == true) in these cases: cowbOy, molokO, buLl 
} 	else if (matches == true) {
	return false;
}

//In other cases
for (var i = 0; i < str.length; i++) {
	if (ArrAllCharsToSmall[i] == ArrAllCharsToSmall[i + 1]) {
   		return false; // same chars may not be adjacent
 } else {
 	result = true;
 }
}
return result;

}


/*isIsogram "Dermatoglyphics" == true
isIsogram "moose" == false
isIsogram "aba" == false */


console.log(isIsogram("Dermatoglyphics"));
