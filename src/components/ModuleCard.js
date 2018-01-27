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

import ParameterTable from './ParameterTable';
import ConfigModule from '../containers/ConfigModule';



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

class ModuleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      updated: this.props.updated,
      parameters: this.props.parameters,
      expanded: false,
      editMode: false,//false
    };
    this.handleExpandClick = this.handleExpandClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleEditClick() {
    // this.props.edit()
    // console.log(e);
    this.setState({ editMode: !this.state.editMode });
    // const extractedParameters = e.target.value();
    // console.log(extractedParameters);
    // console.log('state parameters');
    // console.log(this.state.parameters)

    // this.setState({ parameters: this.state.parameters });
    this.props.editMode(this.state.id)
    this.props.extractParameters(this.state.parameters)

  }

  render() {
    const { classes, parameters } = this.props;
    // console.log(parameters[0])
    if (!this.state.editMode) {
      return (
        <div className={classes.moduleArea}>

          <Card className={classes.card}>
            <div className={classes.buttonBars}>
              <Checkbox
                      checked={false}
                      tabIndex={-1}
                      disableRipple={false}
                    />
              <Button
                color="secondary"
                aria-label="edit"
                className={classes.editButton}
                onClick={this.handleEditClick}
              >
                <ModeEditIcon />
              </Button>
            </div>

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
              title={this.state.name}
              subheader={this.state.description}
            >
            </CardHeader>

            <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
              <ParameterTable
                parameters={parameters}>
              </ParameterTable>
            </Collapse>

          </Card>
        </div>
      );

    } else {
      return (
        <div className={classes.moduleArea}>

          <Card className={classes.card}>
            <div className={classes.buttonBars}>
              <Checkbox
                      checked={false}
                      tabIndex={-1}
                      disableRipple={false}
                      onClick={this.handleEditClick}
                    />
              <Button
                color="secondary"
                aria-label="edit"
                className={classes.editButton}
                onClick={this.handleEditClick}
              >
                <ModeEditIcon />
              </Button>


            </div>

            <ConfigModule
              parameters={this.state.parameters}
            />
          </Card>
        </div>
      );
    }
  }
}

ModuleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  updated: PropTypes.object.isRequired,
  parameters: PropTypes.object.isRequired,
  editMode: PropTypes.bool.isRequired,
  // edit: PropTypes.func.isRequired,
  extractParameters: PropTypes.func.isRequired,
};


export default withStyles(styles)(ModuleCard);
