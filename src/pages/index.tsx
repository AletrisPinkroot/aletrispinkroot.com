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
import Footer from '../components/Footer';

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
						text='watch this space'
						subtext='2022'
						link='https://link.aletrispinkroot.com/'
					/>
					<About
						subheading='Aletris Pinkroot'
						bio={
							<p>
								Aletris Pinkroot brings a new, delicate sound to
								pop music, with beautiful, awe-inspiring tunes
								that will stop you in your tracks, as well as
								strong and groovy songs which are destined to
								get you out of your seat.
								<br />
								Based in Australia, Aletris Pinkroot is an indie
								alternative pop artist, destined to take the
								world by storm. With his debut EP, ‘unrequited’,
								Aletris lets us all know that he is not a force
								to be reckoned with. With the danceable likes of
								‘Endless Lullaby’ and ‘Haunted House’ comes the
								quiet, understated songs such as
								‘Whycantshebehim?’ and ‘Feel’. ‘unrequited’ is
								through and through a diverse but specific set
								of songs which are destined to create a space
								for themselves inside your mind.
								<br />
								With radio plays from Radio Adelaide and
								playlist adds from the likes of Eagles Nest
								Radio, Aletris Pinkroot is no stranger to the
								spotlight. The underground success of ‘Endless
								Lullaby’ has given Aletris a name in the
								Australian indie scene, one that is sure to
								remain in the coming years.
								<br />
								In the coming year, Aletris is planning a debut
								album, one that will accurately show his range
								of genre and individuality in the world of pop
								music. Expect big things.
							</p>
						}
					/>
					<Discography releases={discog} />
					<Footer />
				</main>
			</>
		);
	}
}

export default index;
