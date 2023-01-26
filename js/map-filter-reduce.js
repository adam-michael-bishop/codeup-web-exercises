'use strict';

(function (){
	const users = [
		{
			id: 1,
			name: 'ryan',
			email: 'ryan@codeup.com',
			languages: ['clojure', 'javascript'],
			yearsOfExperience: 5
		},
		{
			id: 2,
			name: 'luis',
			email: 'luis@codeup.com',
			languages: ['java', 'scala', 'php'],
			yearsOfExperience: 6
		},
		{
			id: 3,
			name: 'zach',
			email: 'zach@codeup.com',
			languages: ['javascript', 'bash'],
			yearsOfExperience: 7
		},
		{
			id: 4,
			name: 'fernando',
			email: 'fernando@codeup.com',
			languages: ['java', 'php', 'sql'],
			yearsOfExperience: 8
		},
		{
			id: 5,
			name: 'justin',
			email: 'justin@codeup.com',
			languages: ['html', 'css', 'javascript', 'php'],
			yearsOfExperience: 9
		}
	];

	//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

	let langArray = users.filter(function (el){
		return el.languages.length >= 3;
	})
	console.log(langArray);

	// Use .map to create an array of strings where each element is a user's email address

	let emailArray = users.map(function (el){
		return el.email
	})
	console.log(emailArray);

	// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

	let totalYearsExperience = users.reduce(function (currentSum, el){
		return currentSum + el.yearsOfExperience;
	}, 0)
	let averageYears = totalYearsExperience / users.length;
	console.log(averageYears);

	// 	Use .reduce to get the longest email from the list of users.

	let longestEmail = users.reduce(function (currentLongestEmail, el){
		if (currentLongestEmail.length < el.email.length) {
			return el.email
		} else {
			return currentLongestEmail
		}
	}, '')
	console.log(longestEmail);

	// 	Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

	let userNameString = users.reduce(function (currentString, el){
		if (currentString === '') {
			return el.name
		} else {
			return currentString + ', ' + el.name
		}
	}, '')
	console.log(userNameString);

	// Use .reduce to get the unique list of languages from the list of users.

	let uniqueLangString = users.reduce(function (totalArray, el){
		return totalArray.concat(el.languages)
	}, [])
		.reduce(function (totalString, el){
			if (!(totalString.includes(el + ','))) {
				return totalString + ', ' + el
			}
			return totalString
		})
	console.log(uniqueLangString);


	let uniqueLangList = users.reduce(function (currentString, el){
		for (const language of el.languages) {
			if (currentString === '') {
				currentString += language
			} else if (!(currentString.includes(language + ','))) {
				currentString += ', ' + language
			}
		}
		return currentString
	}, '')
	console.log(uniqueLangList);
})();