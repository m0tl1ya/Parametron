import React, { Component } from 'react';

import PropTypes from 'prop-types';
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


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: theme.spacing.unit,
    width: 600,
  }),
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '2em',
    marginRight: theme.spacing.unit,
    width: 300,
  },
  selectField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '10em',
  },
  menu: {
    width: 200,
  },
  deleteButton: {
    top: '1em',
  }
});

const parameterTypes = [
  {
    value: 'Number',
    label: 'Number',
  },
  {
    value: 'String',
    label: 'String',
  },
  {
    value: 'Bool',
    label: 'Bool',
  },
];

class ParameterUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={4}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="select-type"
            select
            label="Type"
            className={classes.selectField}
            value={this.state.type}
            onChange={this.handleChange('type')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {parameterTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <IconButton
            className={classes.deleteButton}
            aria-label="Delete"
            >
            <ClearIcon />
          </IconButton>
        </form>
      </Paper>

    );
  }
}



ParameterUnit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParameterUnit);
