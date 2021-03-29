import React, { Fragment, useEffect } from 'react'
import Router from 'next/router';
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import '../styles/globals.css'
import Copyright from '../components/copyright'
import {GTM_ID} from '../lib/constants'
import { GTMPageViewEvent } from '../gtm/events.js';

function MyApp({ Component, pageProps }) {

	// Initiate GTM
	useEffect(() => {
		const handleRouteChange = (url) => GTMPageViewEvent(url);
		Router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
				Router.events.off('routeChangeComplete', handleRouteChange);
		};
}, []);


  return (
    <Fragment>
      <Head>
        <title>Go User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
      <Copyright/>
    </Fragment>
  )
}

export default MyApp
