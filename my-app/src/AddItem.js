import React, { Component } from 'react';

class AddItem extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(event) {
		event.preventDefault();
		this.props.onAdd(this.nameInput.value);
		this.nameInput.value = '';
	}
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<h3>Type your task</h3>
				<input placeholder="Task" ref={nameInput => this.nameInput = nameInput} />
				<button>Add</button>
				<hr />
			</form>
		);
	}
}
export default AddItem;
