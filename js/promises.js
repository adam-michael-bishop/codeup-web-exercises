'use strict';

import {GITHUB_API_KEY} from "./keys.js";

function getUserPublicCommits(username) {
	return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}})
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				return Promise.reject(response);
			}
		})
		.then(data => data)
		.catch(error => console.error(error));
}

async function printDateOfLastPush() {
	let userPublicCommits = await getUserPublicCommits('adam-michael-bishop');
	if (userPublicCommits) {
		console.log(`last commit was on ${userPublicCommits[0].created_at}`);
	}
}

function wait(waitTimeSeconds) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`This message displayed after ${waitTimeSeconds} seconds`)
		}, waitTimeSeconds * 1000);
	})
}

printDateOfLastPush();
wait(1).then(result => console.log(result));
wait(3).then(result => console.log(result));
wait(10).then(result => console.log(result));