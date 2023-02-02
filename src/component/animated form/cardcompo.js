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
    minWidth: "500px",
    margin: " 0 auto",
    marginBottom:"50px",
    marginLeft:"50px",
    marginTop: "20px",
       
  },
  title: {
    fontSize: 14,
  },
});

export default function MyCard(props) {
  const classes = useStyles();
  const {formData, myClick} = props;

  return (
    
      <Card className={classes.root} variant="outlined" >
        <CardContent className="animationc">
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {formData.heading}
          </Typography>
          <FormControl>
            <TextField id="Name" label={formData.input1} color="secondary" onClick={()=>myClick(formData.id)}/>
            <TextField id="Name" label={formData.input2} color="secondary" onClick={()=>myClick(formData.id)}/>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button size="small">Submit</Button>
        </CardActions>
      </Card>
  );
}
