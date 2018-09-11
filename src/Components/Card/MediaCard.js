import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  media: {
    height: "40%",
  },
  invertColor: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white
  },
  largeContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});

function CardActionsBuilder(displayActions) {
  if(displayActions) {
    return (
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    )
  }
}

function MediaCard(props) {
  const { classes, displayActions, invertColor, largeContent, post } = props;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={post.ImageUrl}
          title={post.Title}
        />
      <CardContent className = {`
                      ${invertColor === true ? classes.invertColor : ''}
                      ${largeContent === true ? classes.largeContent : ''}
                      `}>
          <Typography gutterBottom variant="headline" component="h2" color="inherit">
            {post.Title}
          </Typography>
          <Typography component="p" color="inherit">
            {post.Body}
          </Typography>
        </CardContent>
      </CardActionArea>
      {CardActionsBuilder(displayActions)}
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
