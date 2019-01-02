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

