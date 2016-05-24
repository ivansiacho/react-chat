import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MessageItem extends Component {
	render() {
		const message = this.props.message;
		return (
			<div className="message">
				<strong>{message.user}</strong> {this.formatDate(message.timeStamp)} - {message.text}
			</div>
		)
	}

	formatDate(timestamp) {
		var dt = new Date(timestamp * 1000);

		var hours = dt.getHours();
		var minutes = dt.getMinutes();
		var seconds = dt.getSeconds();

		if (hours < 10) {
			hours = '0' + hours;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		return hours + ':' + minutes + ':' + seconds;
	}
}

export default MessageItem;