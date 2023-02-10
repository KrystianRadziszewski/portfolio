import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import { LanguageContextProvider } from '@/context/language';

export default function App({ Component, pageProps }) {
	return (
		<>
			<LanguageContextProvider>
				<Navbar />
				<Component {...pageProps} />
			</LanguageContextProvider>
		</>
	);
}
