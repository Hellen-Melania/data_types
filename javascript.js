//task 1

function findWithType(arr, val) {
    for(var i = 0; i < arr.length; i += 1) {
        if(arr[i]['type'] === val) {
            return i;
        }
    }
    return false;
}

function typeOfArray (arr) {
	var counter = 0, 
		arrRes = [];
	
	arr.forEach(function(item, i, arr) {
		var index = findWithType(arrRes, typeof(item));
		
		if(index !== false) {
			arrRes[index]['counter'] += 1; 
		} else {
			arrRes.push({
				type: typeof(item),
				counter: 1
			});
		}
	});

	function showRes(arrRes) {
		arrRes.forEach(function(item, i, arrRes) {
			console.log(arrRes[i]);
		})
	}

	console.log(' Check Array types stat:');
	console.log(showRes(arrRes));
}

typeOfArray([1, 'a', 'b', {}, [], undefined, null, 21, NaN, 45, '' ]);

// task 2.1

function rangeToArray (rangeStart, rangeStop, rangeStep) {
	var arr = [];

	if(rangeStart > rangeStop) {
		var buf = rangeStop;
		rangeStop = rangeStart;
		rangeStart = buf;
	}

	for(var i = rangeStart; i <= rangeStop; i += rangeStep ) {
		arr.push(i);
	}

	if(buf) {
		return arr.reverse();	
	}
	return arr;
}

console.log(rangeToArray(2, 8, 2));
console.log(rangeToArray(8, 2, 2));

// task 2.2

function arrSum(arr) {
	var sum = arr.reduce(function(sum, index) {
		return sum + index;
	}); 
	return sum;
}
console.log(arrSum([10, 20, 20]));

// task 2.3

function multiplyArray(arr) {
	var product = arr.reduce(function(product, index) {
		return product * index;
	}); 
	return product;
}
console.log(multiplyArray([10, 20, 20]));

//task 2.4

function reverseArray(arr) {
	var arr = arr.reverse();
	return arr;
}
console.log(reverseArray([1, 2, 3]));

//task 3
function parser() {
	var maxTextLength = 140,
	userText = prompt('Please write your text');
	if(userText.length > maxTextLength){
		alert('You have been written too long text');
		userText = prompt('Please write your text');
	}

	function replaceRepeatedPunctuations(str) {
		console.log('Hey, here\'s Your original message:', str);

		var punctuations = [',', '.', '!', '?', '-', ':', ';'],
		   result = str[0];
		for( var i = 1; i < str.length-1; i++){	
			if (!((punctuations.indexOf(str[i - 1]) >= 0) && (punctuations.indexOf(str[i]) >= 0))) {
				result += str[i];
			}
		}
		console.log('We\'ve found some mistakes, so corrected them for You:', result);
    	return result;
	}
	
	function persentPunctuations(str) {
		var punctuations = [',', '.', '!', '?', '-', ':', ';'],
		    n = 0,
		    persent = 0;

		for (var i = 0; i < str.length-1; i++) {
			if(punctuations.indexOf(str[i]) >= 0) {
				n +=1;
			}
		}
		persent = Math.round(( n / str.length) * 100);
		console.log( persent + '% , of the text are punctuation marks!');
		return persent;
	}

	replaceRepeatedPunctuations(userText);
	persentPunctuations(userText);
};

parser();

//task 4

var obj1 = {
    a: 1,
    c: 3
};

var obj2 = {
    a: 1,
    b: 2,
    c: 3
};

function deepEqual(obj1, obj2) {
	for (var key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (!obj2.hasOwnProperty(key)) return false;
            if (obj1[key] != obj2[key]) return false;
        }
    }
    for (var key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (!obj1.hasOwnProperty(key)) return false;
            if (obj1[key] != obj2[key]) return false;
        }
    }
    return true;
}
console.log(deepEqual(obj1, obj2));

function deepEqual_2(obj1, obj2) {
    object1 = typeof(obj1);
    object2 = typeof(obj2);

    if(object1 === object2) {
        switch (object1) {
            case "object" : 
            	return JSON.stringify(obj1) === JSON.stringify(obj2);
            case "function": 
            	return eval(obj1).toString() === eval(obj2).toString();
            default:
                return obj1 == obj2;
        }
    }
    return false;
}
console.log(deepEqual_2(obj1, obj2));