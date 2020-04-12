import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppContainer } from './containers/AppContainer';
import { AppTheme } from './components/AppTheme';

ReactDOM.render(
	<AppTheme>
		<AppContainer />
	</AppTheme>,
	document.getElementById('root')
);
