import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default class View extends Component {
constructor(props)
{
    super(props)
}
  
render(){
    const classes = useStyles();
    
    let array=[]
    for(let i=0;i<1;i++)
    {
        array.push(
            <div>
            <Card className={classes.root} variant="outlined">
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                AC {i+1}
            </Typography>
            <Typography variant="h5" component="h2">
                Status :
            </Typography>
            <Typography variant="h5" component="h2">
                Temperature :
            </Typography>
            
            
            </CardContent>
            
            </Card>
            </div>
            )
    }
    return (
        <div>
        {array}
        </div>
    )
   }
}
