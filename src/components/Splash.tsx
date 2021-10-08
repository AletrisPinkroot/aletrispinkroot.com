import { StaticImage } from 'gatsby-plugin-image';

import React from 'react';
import styled from 'styled-components';
import v from '../constants/rules';

type SplashProps = {
	text: string;
	subtext: string;
	link: string;
};

const SplashText = styled.a`
	font-family: ${v.hFont};
	font-size: ${v.h1Size};
	text-decoration: none;
	color: ${v.white};
	position: absolute;
	z-index: 1;
	text-align: center;

	& * {
		position: relative;
	}

	&::before {
		content: '';
		background-color: ${v.red};
		width: 0%;
		position: absolute;
		display: block;
		top: -0.7rem;
		left: -1%;
		height: 150%;
		z-index: -1;
		transition: width 0.5s ease-in-out;
	}

	&:hover {
		&::before {
			width: 102%;
			transition: width 0.5s ease-in-out;
		}
	}

	span {
		font-size: ${v.pSize};
		text-align: center;
	}
`;

export default class Splash extends React.Component<SplashProps> {
	render() {
		return (
			<div
				id='home'
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}>
				<div
					className='clip'
					style={{
						maxWidth: '100vw',
						maxHeight: '100vh',
						overflow: 'hidden',
						position: 'absolute',
						zIndex: -500,
						top: 0,
						right: 0,
						left: 0,
					}}>
					<StaticImage
						src={'../images/nighttrees.jpg'}
						alt='Night sky and trees'
						placeholder='dominantColor'
						style={{
							height: '100vh',
							position: 'relative',
							top: 0,
						}}
					/>
				</div>
				<SplashText href={this.props.link}>
					{this.props.text}
					<br />
					<span>{this.props.subtext}</span>
				</SplashText>
			</div>
		);
	}
}
