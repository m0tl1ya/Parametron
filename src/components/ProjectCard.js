import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Checkbox from 'material-ui/Checkbox';
import ModeEditIcon from 'material-ui-icons/ModeEdit';


import ModulePanel from './ModulePanel';




const styles = theme => ({
  card: {
    maxWidth: 1000,
  },
  editButton: {
    marginTop: '2.0em',
  },
  // buttonBars: {
  //   margin: '0.5em',
  // },
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
  moduleArea: {
    padding: '1em',
  },
});

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      expanded: false,
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
    // this.handleToggle = this.handleToggle.bind(this);
    // this.handleEditClick = this.handleEditClick.bind(this);
  }


  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };


  render() {
    const { classes, parameters } = this.props;
    // console.log(parameters[0])
    return (
      <div className={classes.moduleArea}>

        <Card className={classes.card}>
          <CardHeader
            action={
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
            }
            title={this.props.name}
            subheader={this.props.description}
          >
          </CardHeader>

          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <div>
              {this.props.modules.map(module =>
                <ModulePanel
                  id={module.id}
                  name={module.name}
                  description={module.description}
                  updated={module.updateAt}
                  parameters={module.parameters}
                />)}
            </div>
          </Collapse>

        </Card>
      </div>
    );

  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  updated: PropTypes.object.isRequired,
  modules: PropTypes.object.isRequired,
  // selectedOn: PropTypes.func.isRequired,
  // editModeOn: PropTypes.func.isRequired,
  // extractModule: PropTypes.func.isRequired,
};


export default withStyles(styles)(ProjectCard);
