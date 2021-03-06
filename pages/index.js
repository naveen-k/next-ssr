import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/Home.module.css';
import { Button, Typography } from '@material-ui/core';
import AdvanceMaskInput from '../components/inputfeild';
import styled from 'styled-components';

const MaskedInput = styled(AdvanceMaskInput)`
  border-radius: 10px;
  border-color: rgb(219, 112, 147);
  min-width: 200px;
`;
export default function Home() {

	return (
		<Fragment>
			<Grid container alignItems={'center'}>
				<Grid item xs={6} sm={6}>
					<img className={styles.image} src="/detective.jpg" alt="detective doggo" />
				</Grid>
				<Grid container spacing={6} item xs={6} sm={6} direction={'column'} alignItems={'center'}>
					<Grid item>
						<Typography variant={'h4'}>Welcome to Next level React with NEXT.js</Typography>
					</Grid>
					<Grid item>
						<Button color="primary" variant="contained">
							<Link href="/users">
								<a>Start Exploring [Static Generation]</a>
							</Link>
						</Button>
						<Button color="primary" variant="outlined">
							<Link href="/posts">
								<a>Start Exploring [SSR]</a>
							</Link>
						</Button>
						<Button color="primary" variant="outlined">
							<Link href="/spa">
								<a>SPA</a>
							</Link>
						</Button>
					</Grid>
					<AdvanceMaskInput/>
				</Grid>
			</Grid>
		</Fragment>
	);
}
