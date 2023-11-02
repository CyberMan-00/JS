'use strict';

const plotQueue = ['block', 'block'];


class BlockEvent {
	constructor(messageToPlayer, messageFromPlayer, triggerWord, blockTimer) {
		this.messageToPlayer = messageToPlayer;
		this.messageFromPlayer = messageFromPlayer;
		this.triggerWord = triggerWord;
		this.blockTimer = blockTimer;

	}

	triggerEvent() {
		if (this.messageFromPlayer.contains(this.triggerWord)) {
			return 'event is triggered';
		}
	}

};



// eventOne() {
// 	console.log('eventOne');
// };
// eventTwo() {
// 	console.log('eventOne');
// };
// eventThree() {
// 	console.log('eventOne');
// };

// BlockEvent.eventList = [BlockEvent.eventOne, BlockEvent.eventTwo, BlockEvent.eventThree];

const instance = new BlockEvent('hello', 'bye bye!', '!', '10sec');

console.log(instance.triggerEvent());