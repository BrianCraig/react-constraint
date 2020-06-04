import React from 'react';
import { Definitions, createLayoutComponent } from 'react-constraint';
import { useScreenSize } from '../hooks/useScreenSize';
import { makeStyles } from '@material-ui/core';
import { SidebarContainer } from './SidebarContainer';
import { ConstraintViewerContainer } from './ConstraintViewerContainer';

const AppContainerLayout: Definitions.LayoutDefinition = {
	Sidebar: {
		width: 270,
		constraints: [
			{ component: 'parent', fromSide: 'left', toSide: 'left', distance: 32 },
			{ component: 'parent', fromSide: 'top', toSide: 'top', distance: 32 },
			{ component: 'parent', fromSide: 'bottom', toSide: 'bottom', distance: -32 }
		]
	},
	Main: {
		constraints: [
			{ component: 'Sidebar', fromSide: 'left', toSide: 'right', distance: 32 },
			{ component: 'parent', fromSide: 'right', toSide: 'right', distance: -32 },
			{ component: 'parent', fromSide: 'top', toSide: 'top', distance: 32 },
			{ component: 'parent', fromSide: 'bottom', toSide: 'bottom', distance: -32 }
		]
	}
};

const useStyles = makeStyles((theme) => ({
	parent: {
    background: theme.palette.background.default
	},
	sidebar: {
		background: theme.palette.background.paper,
		borderRadius: 8,
		boxShadow: theme.shadows[2]
	},
	main: {
		background: theme.palette.background.paper,
		borderRadius: 8,
		boxShadow: theme.shadows[2]
	}
}));

export const AppContainer = () => {
	const classes = useStyles();
	const [ width, height ] = useScreenSize();
	const Layout = createLayoutComponent(AppContainerLayout);
	return (
		<Layout
			width={width}
			height={height}
			parent={<div className={classes.parent} />}
			Sidebar={
				<div className={classes.sidebar}>
					<SidebarContainer />
				</div>
			}
			Main={
				<div className={classes.main}>
					<ConstraintViewerContainer />
				</div>
			}
		/>
	);
};
