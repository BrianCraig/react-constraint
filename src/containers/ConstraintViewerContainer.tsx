import React from 'react';
import { makeStyles } from '@material-ui/core';

const lines = (color) =>`
  repeating-linear-gradient(
    180deg,
    rgba(0,0,0,0.3),
    rgba(0,0,0,0.3) 1px,
    transparent 0px,
    transparent 19px
  ),
  repeating-linear-gradient(
    90deg,
    rgba(0,0,0,0.3),
    rgba(0,0,0,0.3) 1px,
    transparent 0px,
    transparent 19px
  )
`;

const useStyles = makeStyles((theme) => ({
	parent: {
    backgroundImage: lines("#fff"),
    width: 400,
    height: 600, 
    border: `4px dashed ${theme.palette.primary.light}`,
    boxSizing: "border-box"
	},
	component: {
		background: theme.palette.background.paper,
		borderRadius: 8,
		boxShadow: theme.shadows[2]
	}
}));

export const ConstraintViewerContainer = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.parent}>
				<div className={classes.component} />
			</div>
		</div>
	);
};
