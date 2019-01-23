function isIsogram (str) {
	strArr = str.toLowerCase().split('').sort();
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] === strArr[i + 1]) {
			return false
		}
	}
	return true
}

console.log(isIsogram('abcdef'));

//solution from other warriors
/*
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
*/

/*
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
*/
