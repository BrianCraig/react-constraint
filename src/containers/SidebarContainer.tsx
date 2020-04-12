import React, { useState } from 'react';
import {
	makeStyles,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Divider,
} from '@material-ui/core';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LayersIcon from '@material-ui/icons/Layers';
import { MenuContainer } from './MenuContainer';
import { ConstraintsContainer } from './ConstraintsContainer';
import { ComponentsContainer } from './ComponentsContainer';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360
	},
	title: {
		padding: theme.spacing(2),
		borderBottom: `1px solid ${theme.palette.divider}`,
		fontSize: "0.9rem",
		fontWeight: 700
	}
}));

const options: {name: string, title:string, icon: React.FunctionComponent, component: React.FunctionComponent}[] = [
	{name: "menu", title: "Open & Save", icon: InsertDriveFileIcon, component: MenuContainer},
	{name: "components", title: "Components", icon: LayersIcon, component: ComponentsContainer},
	{name: "constraints", title: "Constraints", icon: BorderAllIcon, component: ConstraintsContainer}
]

export const SidebarContainer = () => {
	const classes = useStyles();
	const [selected, setSelected] = useState(options[0].name);
	const selectedSection = options.find(option => option.name === selected) || options[0]
	return (	
		<div className={classes.root}>
			<Typography variant="subtitle1" className={classes.title}>
				react-constraint Playground
			</Typography>
			<List component="nav">
				{options.map(section => <ListItem button onClick={() => setSelected(section.name)} selected={selectedSection === section}>
					<ListItemIcon>
						<section.icon />
					</ListItemIcon>
					<ListItemText primary={section.title} />
				</ListItem>)}
			</List>
			<Divider />
			<selectedSection.component />
		</div>
	);
};
