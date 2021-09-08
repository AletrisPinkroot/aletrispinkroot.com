// Aletris Pinkroot 2021
/*
	Official aletris pinkroot website written in Gatsby.
*/
import React from 'react';
import Navbar from '../components/Navbar';
import Splash from '../components/Splash';
import About from '../components/About';
import Discography from '../components/Discography';
import { Helmet } from 'react-helmet';
import discog from '../constants/discog.json';

class index extends React.Component {
	render() {
		return (
			<>
				<Helmet>
					<title>Aletris Pinkroot</title>
					<meta name='title' content='Aletris Pinkroot' />
					<meta
						name='description'
						content="The official website for Aletris Pinkroot, an Australian alternative pop artist. His debut album, 'idltwyttma', is coming soon."
					/>
					<meta
						name='keywords'
						content='pop, music, art, artist, alternative, electronic, country, indie, acoustic'
					/>
					<meta name='robots' content='index, follow' />
					<meta
						http-equiv='Content-Type'
						content='text/html; charset=utf-8'
					/>
					<meta name='language' content='English' />
					<meta name='revisit-after' content='50 days' />
				</Helmet>
				<main style={{ margin: 0, padding: 0 }}>
					<Navbar />
					<Splash
						text="i don't like the way you talk to me anymore"
						subtext='december 5 2022'
						link='https://link.aletrispinkroot.com/idltwyttma'
					/>
					<About
						subheading='Aletris Pinkroot'
						bio={
							<p>
								Aletris Pinkroot takes the best parts of Owl
								City and Phoebe Bridgers and blends them
								together into a beautiful and catastrophic
								experience.
								<br /> Producing music since age 12, Corey
								Francis began as an EDM producer under the
								pseudonym 'Broken Mirror'. Today, he creates
								alternative pop with a unique flair of
								danceability while remaining truly emotive.
								Corey co-writes his music with Edward Joseph of
								1&Only, and together they create important,
								enriching, and poetic music that truly means
								something.
								<br /> In 2020, Aletris Pinkroot released his
								debut single, On Your Side, to an audience of
								loyal fans from the days of Broken Mirror. He
								then released 'Whycantshebeme?', a raw demo,
								direct to music stores with no production,
								conveying a story of unrequited feelings and
								disastrous proms, 'Whycantshebeme?' is a
								snapshot into Aletris's debut EP, 'Unrequited',
								which will release on May 7th.
							</p>
						}
					/>
					<Discography releases={discog} />
				</main>
			</>
		);
	}
}

export default index;
