import React, { Component } from 'react';
import styled from 'styled-components';

const Styling = styled.span`
	background-color: #fbfbfb;
	border: 1px solid #a9b1b5;
	padding: 3px 6px;
	color: #a9b1b5;
	border-radius: 5px;
	transition: all 300ms ease-in-out;
	text-decoration: none;
	margin: 5px;
`;

class Tag extends Component {
	render() {
		return <Styling>{this.props.tagText}</Styling>;
	}
}

export default Tag;