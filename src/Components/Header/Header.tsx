import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    link: {
      color: 'inherit',
      textDecoration: 'inherit'
    },
    title: {
      flexGrow: 1,
      color: 'white!important'
    },
  }),
);

export default function Header() {
  const classes: Object = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <a href="/" className={classes.link}>Contacts Application</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}