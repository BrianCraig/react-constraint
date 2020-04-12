import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		type: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
	}
});

export const AppTheme: React.FunctionComponent = ({ children }) => <ThemeProvider theme={theme} children={children} />;
