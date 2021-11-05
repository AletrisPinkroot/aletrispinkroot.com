//Aletris Pinkroot 2021
//Navigation bar, goes transparent after scrolling, links change colour on hover and based on last clicked.

import React from 'react';
import styled, { css } from 'styled-components';
import '../constants/fonts.css';
import v from '../constants/rules';

type LinkProps = {
	logo?: boolean;
	isActive?: boolean;
	i: number;
	setActive: (i: number) => void;
	href: string;
	active: number;
	name: string;
};

const LinkStyle: any = styled.a`
	font-size: ${v.pSize};
	font-family: ${v.hFont};
	color: ${v.white};
	transition: color 0.1s ease-in-out;

	text-decoration: none;
	&:hover {
		text-decoration: none;
		color: ${v.red};
	}

	${(props: LinkProps) => {
		if (!props.logo) {
			if (props.isActive) {
				return css`
					color: ${v.red};
					margin-left: 2em;
				`;
			}
			return css`
				margin-left: 2em;
			`;
		} else {
			return css`
				font-family: Allison, cursive;
				font-size: 3rem;
			`;
		}
	}}

	@media screen and (max-width: 800px) {
		font-size: 1.5rem;
		margin-left: 0.5em;
		${(props: LinkProps) => {
			if (props.logo) {
				return css`
					font-size: 2rem;
				`;
			}
		}}
	}
		}}
	}
	@media screen and (max-width: 500px) {
		font-size: 1rem;
		${(props: LinkProps) => {
			if (props.logo) {
				return css`
					font-size: 1.5rem;
				`;
			}
		}}
	}
		}}
	}
`;

const Link = (props: LinkProps) => {
	/**
	 * Updates active link to i (set in props)
	 */
	function updateActive() {
		props.setActive(props.i);
	}

	return (
		<LinkStyle
			href={props.href}
			onClick={updateActive}
			isActive={props.active === props.i}>
			{props.name}
		</LinkStyle>
	);
};
export default class Navbar extends React.Component<
	{},
	{ active: number; isScrolled: boolean }
> {
	constructor(props: {}) {
		super(props);
		this.state = { active: 0, isScrolled: false };
		this.setActive = this.setActive.bind(this);
	}

	/**
	 * Set active link in navbar.
	 * @param i {Number} Index of the active link
	 */
	setActive(i: number) {
		this.setState({ active: i });
	}

	//Implement opaque background when page has been scrolled > 200px.
	componentDidMount() {
		window.addEventListener('scroll', () => {
			this.setState({ isScrolled: window.scrollY > 200 });
		});
	}

	render() {
		return (
			<nav
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '1em',
					backgroundColor: this.state.isScrolled
						? v.black
						: 'rgba(0, 0, 0, 0)',
					transition: 'background-color 0.2s ease-in-out',
					position: 'fixed',
					top: 0,
					right: 0,
					left: 0,
					zIndex: 1000,
				}}>
				<LinkStyle logo href='https://aletrispinkroot.com'>
					aletris pinkroot
				</LinkStyle>

				<div>
					<Link
						i={0}
						href='#home'
						name='home'
						active={this.state.active}
						setActive={this.setActive}></Link>
					<Link
						i={1}
						href='#about'
						name='about'
						active={this.state.active}
						setActive={this.setActive}></Link>
					<Link
						i={2}
						href='#discography'
						name='discography'
						active={this.state.active}
						setActive={this.setActive}></Link>
					<Link
						i={3}
						href='//shop.aletrispinkroot.com'
						name='shop'
						active={this.state.active}
						setActive={this.setActive}></Link>
				</div>
			</nav>
		);
	}
}
