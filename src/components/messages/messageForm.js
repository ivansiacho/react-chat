import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MessageForm extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" className="form-control" ref="text" placeholder="insert your message" />
				</form>
			</div>
		)
	}

	onSubmit(event) {
		event.preventDefault();

		this.props.emit('messageAdded', {
			timeStamp: Date.now(),
			text: this.refs.text.value.trim(),
			user: this.props.user.name
		});

		// Clear form
		this.refs.text.value = '';
	}
}

export default MessageForm;