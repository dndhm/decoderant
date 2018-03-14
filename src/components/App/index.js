import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import injectStaticSheet from 'inject-static-sheet';

import Heading from '../Heading';
import Grid from '../Grid';
import Project from '../Project';

const styles = {
	heading: {
		padding: '40px 0',
	},
};

const App = ({
	classes,
}) => (
	<Fragment>
		<div className={classes.heading}>
			<Heading level={1}>Decoderant</Heading>
		</div>
		<Grid>
			<Project
				description="In 2016/17 I worked at The Financial Times in their new, but rapidly evolving Internal Tooling department. I lead UI development on a hub for managing GDPR Subject Access Requests and quickly built a robust and scalable application using React, Redux and NodeJS."
				tags={['NodeJS', 'React', 'Redux', 'Neo4j', 'CSS']}
				title="FT Internal Tooling"
			/>
			<Project
				description="As part of a multi-billion pound transformation project, the Account Opening project was at the forefront of a massive shift in HSBC's online offering. I was one of two developers at the outset of the project back in 2015 and saw the project right through to its launch in 2017."
				tags={['React', 'Redux', 'Responsive', 'CSS']}
				title="HSBC Customer Onboarding"
			/>
			<Project
				description="Working with Ostmodern I developed this simple, yet rich site for Cirkus, a new on-demand video service."
				tags={['CSS', 'JS', 'Responsive']}
				title="Cirkusgo.com"
			/>
			<Project
				description="I worked as an integral part of the BallBall team at Ostmodern, building the Backbone Marionette app architecture and much of the user interface for this slick Android app."
				tags={['Backbone', 'JS', 'Phonegap']}
				title="BallBall Android App"
			/>
			<Project
				description="I built the front end for Ostmodern's beautiful new website. Its minimal design belies a suprisingly rich user experience."
				tags={['CSS', 'JS', 'Responsive']}
				title="Ostmodern"
			/>
			<Project
				description="This parallax scrolling site makes use of striking photography and bold typography to draw the user through the agency's key values. It is content managed via a heavily customised, Wordpress-based CMS."
				tags={['CSS', 'JS', 'Wordpress', 'PHP']}
				title="Grace Blue"
			/>
			<Project
				description="Working with Ostmodern, I was responsible for the front end development of EE Film. The site features deceptively powerful film search tools and some subtle but effective usability features."
				tags={['CSS', 'JS']}
				title="EE Film"
			/>
			<Project
				description="Again working with Ostmodern, I added engaging front-end features and polish to YouView.com in preparation for the new VOD service&rsquo;s high-profile 2012 launch."
				tags={['CSS', 'JS']}
				title="YouView"
			/>
			<Project
				description="1DA is a new creative consultancy based in London who tasked me with creating a minimal, yet impactful site that would allow their content to speak for its self."
				tags={['CSS', 'JS', 'Wordpress', 'PHP']}
				title="1DA"
			/>
			<Project
				description="This site provides information about Merchant Square and its surrounding area for prospective buyers. Content and users are managed by the client using an intuitive interface."
				tags={['CSS', 'JS', 'Wordpress', 'PHP']}
				title="3 Merchant Square"
			/>
			<Project
				description="Launched in 2011, the Bostock and Pollitt website represents the agency&rsquo;s approach through the use of full-bleed imagery, striking visuals and tactile navigational devices."
				tags={['CSS', 'JS', 'Wordpress', 'PHP']}
				title="Bostock and Pollitt"
			/>
			<Project
				description="Londonwallplace.com uses a variety of techniques to make its subject matter stand out, including a custom Google Map driven by 3rd party APIs and even floorplans that are more fun to use than they have any right to be."
				tags={['CSS', 'JS', 'Wordpress', 'PHP']}
				title="London Wall Place"
			/>
			<Project
				description="Rather than simply presenting a static online version of their printed report, I injected movement and texture into Morgan Sindall&rsquo;s 2010 annual report. The site is peppered with animated charts and tactile navigation devices to help the user navigate its burgeoning content."
				tags={['CSS', 'JS', 'Wordpress', 'PHP']}
				title="Morgan Sindall AR 2010"
			/>
			<Project
				description="World&rsquo;s Biggest Coffee Morning is Macmillan Cancer Support&rsquo;s flagship fundraiser. I built the front-end templates for their team to implement, including a data-driven coffee bean counter."
				tags={['CSS', 'JS']}
				title="World's Biggest Coffee Morning"
			/>
			<Project
				description="Codeofconviction.com formed the hub of a Gold DMA award-winning campaign for Ubisoft that spanned Twitter, fake security company websites and YouTube."
				tags={['CSS', 'JS', 'Social media', 'PHP']}
				title="Code of Conviction"
			/>
		</Grid>
	</Fragment>
);

App.propTypes = {
	classes: propTypes.object,
};

export default injectStaticSheet(styles, 'App')(App);
