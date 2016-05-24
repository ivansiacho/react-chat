import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class UserList extends Component {
	render() {
		return (
			<div>
				<h3>Users {this.props.users.length}</h3>
				<ul className="list-group">
					{
						this.props.users.map((user, index) => {
							return (
								<li className="list-group-item" user={user} key={index}>
									{user.name}
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default UserList;