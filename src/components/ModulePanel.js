import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';

import ParameterTable from './ParameterTable';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ModulePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === true}
          onChange={this.handleChange}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {this.props.name}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {this.props.description}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ParameterTable
              parameters={this.props.parameters}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ModulePanel.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.objectOf.isRequired,
  description: PropTypes.objectOf.isRequired,
  updated: PropTypes.objectOf.isRequired,
  parameters: PropTypes.objectOf.isRequired,
};


export default withStyles(styles)(ModulePanel);
