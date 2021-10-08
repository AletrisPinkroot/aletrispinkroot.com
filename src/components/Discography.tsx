import React from 'react';

import styled from 'styled-components';
import v from '../constants/rules';

const ReleaseGrid = styled.div`
	display: grid;
	max-width: 40vw;
	gap: 0;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-between;
	align-content: space-between;
	overflow: hidden;

	& img {
		width: 100%;
		height: 100%;
	}
`;

const ReleaseInfo = styled.div`
	ul {
		list-style: none;
	}

	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 60vw;

	color: ${v.white};
	font-family: ${v.hFont};
	font-size: ${v.pSize};
	font-weight: normal;
	line-height: 1;

	h1,
	h3 {
		font-weight: normal;
	}

	h1 {
		font-size: calc(${v.h1Size} + 2rem);
		text-align: center;
		line-height: 1.3;
	}

	h3 {
		text-align: center;
		margin-bottom: 1em;
	}
	img {
		width: 50%;
	}

	.contain {
		display: flex;
		padding: 1em 5em;
		align-content: center;
		align-items: center;
		justify-content: space-between;

		& div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-family: ${v.pFont};
			text-align: left;
			font-size: calc(${v.pSize});
		}
	}
`;

export default class Discography extends React.Component<
	{
		releases: Release[];
	},
	{ release: number }
> {
	constructor(props: { releases: Release[] }) {
		super(props);
		this.state = { release: 0 };
	}
	/**
	 * Array of JSX elements which describe each item in the discography.
	 */
	discog = this.props.releases.map((release, i) => {
		return (
			<div key={i}>
				<h1>{release.name}</h1>
				<h3>{release.releaseDate}</h3>
				<div className='contain'>
					<div>
						<ul>
							{release.tracklist.map((track) => {
								return (
									<li key={track.trackNo}>
										<p>
											{track.trackNo}. {track.trackName}
										</p>
									</li>
								);
							})}
						</ul>
						<br />
						<p>{release.catalogNumber}</p>
					</div>
					<img
						src={release.artwork}
						alt={`${release.name} Artwork`}
					/>
				</div>
			</div>
		);
	});

	/**
	 * Array of jsx elements which have an img of each album artwork in the discography.
	 */
	artworks = this.props.releases.map((release, i) => {
		return (
			<img
				style={{
					cursor: 'pointer',
				}}
				draggable='false'
				onClick={() => this.setState({ release: i })}
				src={release.artwork}
				alt={`${release.name} Artwork`}
				key={i}
			/>
		);
	});

	render() {
		return (
			<div id='discography'>
				<div
					className='container'
					style={{
						display: 'flex',
						backgroundColor: v.black,
					}}>
					<ReleaseGrid>{this.artworks}</ReleaseGrid>
					<ReleaseInfo>
						{this.discog.find((release) => {
							return release.key == this.state.release;
						})}
					</ReleaseInfo>
				</div>
			</div>
		);
	}
}
