import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { GTMPageViewEvent } from '../../gtm/events';


const Home = () => {
	useEffect(() => {
		GTMPageViewEvent("sap-home");		//DataEvent('PageDataLayer', `Total Post - ${postsList.data.length}`);
	});
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
};

const About = () => {
	useEffect(() => {
		GTMPageViewEvent("sap-about");
	});
	return (
		<div>
			<h2>About</h2>
		</div>
	);
};

const SPA = () => (
	<Router>
		<div>
			<h1>SPA Home</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</div>
	</Router>
);

export default SPA;
