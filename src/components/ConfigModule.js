import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';


import { withStyles } from 'material-ui/styles';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import Paper from 'material-ui/Paper';
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
    // paddingBottom: '0em',
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


class ParameterItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: '',
      type: '', //this.props.parameter.type,
      error: false,
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    // this.handleType = this.handleType.bind(this);
  }

  // componentWillMount() {
  //   console.log(this.props.moduleForm);
  // }
  //
  // handleClick() {
  //   // console.log('handleDoubleClick');
  //   // console.log(this.state.editing); // always false
  //   this.setState({ editing: true });
  //   // console.log(this.state.editing); // always false
  //   // e.preventDefault();
  // }
  //
  handleSave(parameterName, value) {
    // console.log('handleSave');
    // console.log(this.props.moduleForm);
    console.log(value);
    this.props.moduleForm.parameters[parameterName] = value;
    // console.log('change');
    // console.log(this.props.moduleForm);
  }
  //
  // handleType = (id, name) => event => {
  //   this.props.editParameterType(id, event.target.value);
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  // };

  render() {
    const { module } = this.props;
    // console.log(this.state.editing); // true after this.setState({ editing: true });
    let i = 0;
    return (
      <div>
        <Typography component="h1">
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

// <form className={classes.container} noValidate autoComplete="off">
//
// </form>


ParameterItem.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  module: PropTypes.objectOf.isRequired,
  moduleForm: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(ParameterItem);
