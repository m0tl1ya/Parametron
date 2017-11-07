import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import ParameterTable from './ParameterTable';



const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class ModuleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card>
          <CardHeader
            title="Training Module"
            subheader="Contain training params of VAE"
          />
          <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
          </IconButton>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <ParameterTable />
          </Collapse>
        </Card>
      </div>
    );
  }
}


export default withStyles(styles)(ModuleCard);
