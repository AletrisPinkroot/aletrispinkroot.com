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
	font-family: Allison, cursive;
	text-align: center;
	font-size: 4rem;
	line-height: 1rem;
	font-weight: normal;
	padding: 1em;
`;

const Bio = styled.p`
	color: ${v.white};
	font-family: ${v.pFont};
	font-size: 1.5rem;
	margin: 0 max(10vw, 5em) 2em;
	line-height: 1.5;
`;

export default class About extends React.Component<AboutProps, {}> {
	render() {
		return (
			<div
				id='aboutsection'
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
				<div className='text biotext'>
					<Subheading className='subheading'>
						{this.props.subheading.toLowerCase()}
					</Subheading>
					<Bio>{this.props.bio}</Bio>
				</div>
				<div className='image' style={{}}>
					<StaticImage
						id='biomage'
						src={'../images/me.jpg'}
						alt='Aletris Pinkroot Standing'
						placeholder='blurred'
					/>
				</div>
			</div>
		);
	}
}
