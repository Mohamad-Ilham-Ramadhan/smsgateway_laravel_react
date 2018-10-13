import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Collapse extends Component {
	state = {
		isOpen: false,
	}

	handleToggle = (togglerQuery) => {
		const toggler = document.querySelector(togglerQuery);
		toggler.addEventListener('click', () => {
			this.setState({
				isOpen: !this.state.isOpen,
			})
		})
	}

	componentDidMount() {
		this.handleToggle(this.props.toggler);
	}

    render() {
    	const { children } = this.props;
        return (
        	<CSSTransition
        		in={this.state.isOpen}
        		timeout={300}
        		classNames='collapse'
        		onEnter={(node) => { node.classList.value = 'collapsing'}}
        		onEntering={(node) => { node.classList.value = 'collapsing'; node.style.height = `${node.scrollHeight}px` } }
        		onEntered={(node) => { node.classList.value = 'collapse show'; node.style = null}}
        		onExit={(node) => { node.style.height = `${node.scrollHeight}px`; node.classList.value = 'collapsing';}}
        		onExiting={(node) => { node.classList.value = 'collapsing'; node.style.height = 0}}
        		onExited={(node) => { node.classList.value = 'collapse'; node.style = null}}
        	>
	    		{children}
        	</CSSTransition>
        );
    }
}

export default Collapse;
