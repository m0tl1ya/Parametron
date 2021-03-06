import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';

import ConfigParameter from './ConfigParameter';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: theme.spacing.unit,
    width: 600,
    marginLeft: '1em',
    display: 'flex',
    // flexWrap: 'wrap',
  }),
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    top: '0.5em',
    bottom: '0.5em',
    marginLeft: '2em',
    marginRight: theme.spacing.unit,
    width: '20em',
  },
  selectField: {
    bottom: '0.5em',
    marginLeft: '15em',
    marginRight: theme.spacing.unit,
    width: '10em',
  },
  menu: {
    width: 200,
  },
  deleteButton: {
    top: '0.5em',
  },
});


class ConfigModule extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    // this.handleType = this.handleType.bind(this);
  }

  handleSave(parameterName, value) {
    // console.log('handleSave');
    // console.log(this.props.moduleForm);
    // console.log(value);
    this.props.moduleForm.parameters[parameterName] = value;
    // console.log('change');
    // console.log(this.props.moduleForm);
  }

  render() {
    const { module } = this.props;
    return (
      <div>
        <Typography variant="title" component="h1">
          {module.name}
        </Typography>
        <Typography component="p">
          {module.description}
        </Typography>
        {module.parameters.map(parameter =>
          <ConfigParameter
            parameter={parameter}
            onSave={this.handleSave}
          />)}
      </div>
    );
  }
}


ConfigModule.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  module: PropTypes.objectOf.isRequired,
  moduleForm: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(ConfigModule);
