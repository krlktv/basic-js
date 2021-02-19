const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members) || members.length === 0 || !members.filter(el => typeof el === 'string').length > 0) {
		return false;
	} else {
		return members.filter(el => typeof el === 'string').map(el => el.trim().toUpperCase()[0]).sort().join('');
	}
};