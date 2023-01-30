/**
 * This script is loaded in index.html
 *
 */
'use strict';

import {GITHUB_API_KEY} from "./keys.js";

function getUserPublicEvents(username) {
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
	let userPublicEvents = await getUserPublicEvents('adam-michael-bishop');
	if (userPublicEvents) {
		// console.log(`last commit was on ${userPublicEvents[0].created_at}`);
		const lastPushTime = userPublicEvents.filter(event => {
			return event.type === "PushEvent";
		})[0].created_at;
		console.log(lastPushTime);
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