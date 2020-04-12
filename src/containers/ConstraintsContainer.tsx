import React from 'react';
import {
  makeStyles,
  Divider,
  IconButton
} from '@material-ui/core';
import BorderTopIcon from '@material-ui/icons/BorderTop';
import BorderRightIcon from '@material-ui/icons/BorderRight';
import BorderBottomIcon from '@material-ui/icons/BorderBottom';
import BorderLeftIcon from '@material-ui/icons/BorderLeft';
import BorderHorizontalIcon from '@material-ui/icons/BorderHorizontal';
import BorderVerticalIcon from '@material-ui/icons/BorderVertical';
import BorderInnerIcon from '@material-ui/icons/BorderInner';

const Icons: React.FunctionComponent[] = [
  BorderTopIcon,
  BorderRightIcon,
  BorderBottomIcon,
  BorderLeftIcon,
  BorderHorizontalIcon,
  BorderVerticalIcon,
  BorderInnerIcon
];

const useStyles = makeStyles((theme) => ({
  constraintButtons: {
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: 'space-between'
  }
}));

export const ConstraintsContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.constraintButtons}>
        {Icons.map((Icon) => (
          <IconButton size={'small'}>
            <Icon />
          </IconButton>
        ))}
      </div>
      <Divider />
    </React.Fragment>
  )
};
