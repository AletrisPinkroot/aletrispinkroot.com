import React from 'react';
import Logo from '../../images/icon.png';

export default class Navbar extends React.Component {
	render() {
		return (
			<nav>
				{
					//logo aligned left
					//links alligned right
				}
				<a href='https://aletrispinkroot.com'>
					<img src={Logo} alt='Aletris Pinkroot' />
				</a>
			</nav>
		);
	}
}
