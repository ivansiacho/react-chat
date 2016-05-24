import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import MessageList from './messages/messageList';
import MessageForm from './messages/messageForm';
import UserList from './users/userList';
import UserForm from './users/userForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'disconnected',
			messages: [{
				timeStamp: Date.now(),
				text: 'Welcome to chat'
			}],
			users: [],
			user: ''
		}
	}

	componentWillMount() {
	    this.socket = io('http://localhost:3000');
	    this.socket.on('connect', this.connect.bind(this));
	    this.socket.on('disconnect', this.disconnect.bind(this));
	    this.socket.on('messageAdded', this.onMessageAdded.bind(this));
	    this.socket.on('userJoined', this.onUserJoined.bind(this));
	}

	connect() {
		this.setState({status: 'connected'});
		console.log('Connected: ' + this.socket.id);
	}

	disconnect(users) {
		this.setState({
			status: 'disconnected',
			users: users
		});
	}

	onUserJoined(users) {
		this.setState({users: users});
	}

	onMessageAdded(message) {
		this.setState({messages: this.state.messages.concat(message)});
	}

	emit(eventName, payload) {
		this.socket.emit(eventName, payload);
	}

	setUser(user) {
		this.setState({user: user});
	}

	render() {
		console.log(this.state.messages);

		if (this.state.user == '') {
			return (
				<UserForm emit={this.emit.bind(this)} setUser={this.setUser.bind(this)} />
			)
		} else {
			return (
				<div>
					<div className="col-md-4">
						<UserList {...this.state} />
					</div>
					<div className="col-md-8">
						<MessageList {...this.state} />
						<MessageForm {...this.state} emit={this.emit.bind(this)} />
					</div>
				</div>
			)
		}
	}
}

export default App;