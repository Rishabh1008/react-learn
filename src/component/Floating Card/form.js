import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FormControl, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "transparent",
    border: "2px solid",
    position: "relative",
    zIndex: "1",
  },
  title: {
    fontSize: 14,
  },
 
});

function MyForm(props) {
  const classes = useStyles();
  const {id, myClick} = props;


  return (
    <Card className={classes.root} variant="outlined">
     
      <CardContent>
        
        <FormControl>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          data1
        </Typography>
          <TextField
            id="First_Name"
            label='First Name'
            color="secondary"
            onClick={() => myClick(id)}
          />
          <TextField
            id="Last_Name"
            label="Last Name"
            color="secondary"
            onClick={() => myClick(id)}
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small">Submit</Button>
      </CardActions>
    </Card>
  );
}
export default MyForm;
