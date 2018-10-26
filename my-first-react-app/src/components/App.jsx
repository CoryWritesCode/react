import React, { Component, Fragment } from 'react';
import Loaded from './Loaded';
import NotLoaded from './NotLoaded';
import InputField from './InputField';

// const App = (props) => {
// 	return (
// 		<h1>{ props.name }</h1>
// 	);
// }

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: 'Hello World!',
			value: '',
			hasLoaded: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(params) {
		this.setState({
			hasLoaded: true
		});
	}

	componentDidMount() {
		this.setState({
			hasLoaded: true
		})
	}

	render() {
		const isLoaded = this.state.hasLoaded;
		let load;

		return (
			<Fragment>
				{isLoaded ? (
					load = <Loaded onClick={ this.handleClick } name={ this.props.name } state={ this.state } />
				) : (
					load = <NotLoaded onClick={ this.handleClick }  />
				)}
			</Fragment>
		);
	}

	// render(props) {
	// 	if (this.hasLoaded === true) {
	// 		return (
	// 			<Fragment>
	// 				<h2>{ this.props.name }, { this.state.text }</h2>
	// 				<input placeholder={ this.state.placeholder } onChange={ (params) => this.handleChange(params) } />
	// 				<button onClick={ (params) => this.handleClick(params) } />
	// 			</Fragment>
	// 		);
	// 	} else {
	// 		return (
	// 			<Fragment>
	// 				<h2>Loading...</h2>
	// 				<button onClick={(params) => this.handleClick(params)} />
	// 			</Fragment>
	// 		)
	// 	}
	// }
	
}

export default App;