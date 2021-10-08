import React from 'react';
export default class ErrorPage extends React.Component {
	render() {
		return (
			<div
				onClick={() =>
					window.location.replace('https://aletrispinkroot.com')
				}>
				oops! you found a bad page! click on me to go back to the normal
				page!
			</div>
		);
	}
}
