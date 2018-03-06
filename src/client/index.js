import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

if (module.hot) {
	module.hot.accept();
}

ReactDOM.hydrate(<App />, document.getElementById('root'));
