import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import React from 'react';

import App from '../components/App';
import template from './template';

const app = express();
app.use(express.static(path.join('build', 'public')));

app.get('*', (req, res) => {
	const publicRoot = process.env.NODE_ENV !== 'production'
		? 'http://localhost:8082/build/public/'
		: '/';

	const html = template(
		renderToString(
			<App />,
		),
		publicRoot
	);

	res.status(200).send(html);
});

app.listen(process.env.PORT || 3000);
