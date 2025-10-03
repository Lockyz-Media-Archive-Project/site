import '../styles/globals.css';
import '../css/styles.css';
import React from 'react';

export default function MyApp({ Component, pageProps }) {
	// minimal, valid App
	return <Component {...pageProps} />;
}
