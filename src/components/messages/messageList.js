import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './messageItem';

class MessageList extends Component {
	render() {
		return (
			<div className="well">
				<h3>Messages</h3>
				{
					this.props.messages.map((message, index) => {
						return <MessageItem message={message} key={index} />
					})
				}
			</div>
		)
	}
}

export default MessageList;