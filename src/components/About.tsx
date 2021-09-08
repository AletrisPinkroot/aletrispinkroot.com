import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import v from '../constants/rules';

type AboutProps = {
	subheading: string;
	bio: JSX.Element;
};

const Subheading = styled.h2`
	color: ${v.white};
	font-family: ${v.font};
	text-align: center;
	font-size: ${v.h2Size};
	font-weight: normal;
	padding: 1em;
`;

const Bio = styled.p`
	color: ${v.white};
	font-family: ${v.font};
	font-size: ${v.pSize};
	margin: 0 max(10vw, 5em) 2em;
	line-height: 1.5;
`;

export default class About extends React.Component<AboutProps, {}> {
	render() {
		return (
			<div
				style={{
					backgroundColor: v.black,
					display: 'flex',
					overflow: 'hidden',
					position: 'relative',
				}}>
				<a
					id='about'
					style={{
						visibility: 'hidden',
						display: 'block',
						position: 'absolute',
						left: 0,
						top: '-4em',
					}}>
					{' '}
				</a>
				<div className='text'>
					<Subheading className='subheading'>
						{this.props.subheading.toLowerCase()}
					</Subheading>
					<Bio>{this.props.bio}</Bio>
				</div>
				<div className='image' style={{ maxWidth: '50vw' }}>
					<StaticImage
						src={'../images/me.jpg'}
						alt='Aletris Pinkroot Standing'
						placeholder='blurred'
						style={{ width: '100%' }}
					/>
				</div>
			</div>
		);
	}
}
