module.exports = function check(str, bracketsConfig) {
	const stack = [];
	const group = {};
	for (let i = 0; i < bracketsConfig.length; i++) {
		group[bracketsConfig[i][0]] = bracketsConfig[i][1];
	}
	for (let i = 0; i < str.length; i++) {
		if (group[stack[stack.length - 1]] == str[i]) {
			stack.pop();
		} else {
			stack.push(str[i]);
		}
	}
	return stack == 0;
};
