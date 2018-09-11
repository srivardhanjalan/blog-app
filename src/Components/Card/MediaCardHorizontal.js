import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
//import 'moment-timezone';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '40%',
  },
  chip: {
    marginRight: theme.spacing.unit,
  }
});

function MediaCardHorizontal(props) {
  const { classes, post } = props;

  var tags = post.Tags.split(',').map(function(tag, index) {
    return <Chip key={index} label={tag} className={classes.chip}></Chip>
  })

  return (
    <Card className={classes.card}>
      <div className={classes.cardDetails}>
        <CardContent>
          <Typography variant="headline">{post.Title}</Typography>
          <Typography variant="subheading" paragraph>
            {post.Body}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {tags}
          </Typography>
          <div>
            <Typography variant="caption" color="textSecondary" align="right">
              <Moment format="YYYY/MM/DD">
                {post.CreatedOn}
              </Moment>
            </Typography>
          </div>

        </CardContent>
      </div>
      <Hidden xsDown>
        <CardMedia
          className={classes.cardMedia}
          image={post.ImageUrl}
        />
      </Hidden>
    </Card>
  );
}

MediaCardHorizontal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCardHorizontal);
