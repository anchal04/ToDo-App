import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import AddItem from './AddItem';

const items = [];
localStorage.setItem('items', JSON.stringify(items));
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: JSON.parse(localStorage.getItem('items'))
		};	
		this.onAdd = this.onAdd.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onEditSubmit = this.onEditSubmit.bind(this);
	}
	componentWillMount(){
		const items = this.getItems();	
		this.setState({ items });
	}
	getItems() {
		return this.state.items;	
	}
	onAdd(name) {
		const items = this.getItems();	
		items.push({
			name
		});
		this.setState({ items })
	}
	onDelete(name){
		const items = this.getItems();	
		const filteredItems = items.filter(item => {
			return item.name!== name;
		});
		console.log(filteredItems)
		this.setState({ items: filteredItems});
	}
	onEditSubmit(name, originalName)
	{
		let items = this.getItems();	
		items = items.map(item => {
			if(item.name === originalName) {
				item.name = name;
			}
			return item;
		});
		this.setState({items});
	}
	render() {
		return (
		<div className="App">
			<h1>ToDo List</h1>
			<AddItem
				onAdd = {this.onAdd}	
			/>
			{
				this.state.items.map(item => {
					return (
						<ListItem
							key = {item.name}
							{...item}
							onDelete = {this.onDelete}
							onEditSubmit = {this.onEditSubmit}
						/>
					);
				})
			}
			</div>
		);
	}
}

export default App;
