const { Extension, PLATFORMS } = require('deckboard-kit');
const winAudio = require('win-audio');

class MicrophoneControlExtension extends Extension {
	constructor() {
		super();
		this.name = 'Microphone Control';
		this.platforms = [PLATFORMS.WINDOWS];
		this.inputs = [
			{
				label: 'Toggle Microphone',
				value: 'toggle-microphone',
				icon: 'microphone-alt',
				color: '#8E44AD'
			},
			{
				label: 'Increase Volume',
				value: 'microphone-up',
				icon: 'volume-up',
				color: '#8E44AD'
			},
			{
				label: 'Decrease Volume',
				value: 'microphone-down',
				icon: 'volume-down',
				color: '#8E44AD'
			}
		];
	}

	execute(action, _) {
		switch (action) {
			case 'microphone-up':
				winAudio.mic.increase(10);
				break;
			case 'microphone-down':
				winAudio.mic.decrease(10);
				break;
			case 'toggle-microphone':
				winAudio.mic.toggle();
				break;
			default:
				break;
		}
	}
}

module.exports = new MicrophoneControlExtension();
