import React from 'react';
import v from '../constants/rules';
import styled from 'styled-components';

const FooterLink = styled.a`
	color: ${v.white};
	font-family: ${v.pFont};
	font-size: 1.5rem;
	line-height: 1;
	text-decoration: none;
	transition: 0.1s;

	&:hover {
		color: ${v.red};
		-webkit-text-stroke: 1px ${v.red};
	}
`;

export default class Footer extends React.Component {
	render() {
		return (
			<div
				style={{
					backgroundColor: v.black,
					padding: '1em',
					margin: 0,
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<div className='socialLinks'>
					<FooterLink href='https://twitter.com/aletrispinkroot'>
						twitter
					</FooterLink>
					<br />
					<FooterLink href='https://facebook.com/aletrispinkroot'>
						facebook
					</FooterLink>
					<br />
					<FooterLink href='https://instagram.com/aletrispinkroot'>
						instagram
					</FooterLink>
				</div>
			</div>
		);
	}
}
