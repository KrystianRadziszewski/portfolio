import About from '@/components/About';
import Contact from '@/components/Contact';
import Main from '@/components/Main';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Krystian Radziszewski - portfolio</title>
				<meta name="description" content="Fron-end developer, Krystian Radziszewski, portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/assets/myAvatar.png" />
			</Head>

			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</>
	);
}
