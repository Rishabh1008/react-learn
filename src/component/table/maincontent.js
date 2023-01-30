import { makeStyles, MenuItem, MenuList, Paper } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));
function MainContent(props) {
    const classes = useStyles();
    const {Content} = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>Name</MenuItem>
          <MenuItem>Subject</MenuItem>
        </MenuList>
      </Paper>
      <Content/>
    </div>
  );
}

export default MainContent;
