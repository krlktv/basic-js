const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let cats = [];
	matrix.concat(...matrix).forEach(item => {
		if (item === '^^') {
			cats.push(item);
		}
	});
	return cats.length;
};