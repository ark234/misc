/********************* 
	Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order 
	they occur in the string t. You can assume t will not have repetitive characters. 
	For s = "weather" and t = "therapyw", the output should be 
	sortByString(s, t) = "theeraw". For s = "good" and t = "odg", 
	the output should be sortByString(s, t) = "oodg".
*********************/

const sortByStrings = (s, t) => {
	const tArr = t.split('');
	const sArr = s.split('');
	const resultArr = [];

	tArr.forEach(letterT => {
		sArr.forEach(letterS => {
			if (letterS === letterT) {
				resultArr.push(letterS); // push letter onto result array
			}
		});
	});
	return resultArr.join('');
};

/**
 * Functional Test
 */
const testSortByStrings = sortByStrings => {
	console.log('TEST 1:');
	if (sortByStrings('weather', 'therapyw') === 'theeraw') {
		console.log('PASSED');
	} else {
		console.log('FAILED');
	}

	console.log('TEST 2:');
	if (sortByStrings('good', 'odg') === 'oodg') {
		console.log('PASSED');
	} else {
		console.log('FAILED');
	}
};

testSortByStrings(sortByStrings);
