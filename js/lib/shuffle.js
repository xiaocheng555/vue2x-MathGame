export let shuffle = function (arr) {
	let newArr = arr.slice();
	for (let i = newArr.length-1; i; i--) {
		let j = Math.floor(Math.random() * i);
		[ newArr[i], newArr[j] ] = [ newArr[j], newArr[i] ];
	}
	return newArr;
}