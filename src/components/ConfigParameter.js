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
import Switch from 'material-ui/Switch';

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


class ConfigParameter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleSave = this.handleSave.bind(this);
    // this.handleType = this.handleType.bind(this);
  }

  componentWillMount() {
    // console.log(this.props.parameterForm);
  }


  handleBlur(e) { // in editing parameter
    // console.log(e.target.value);
    if (this.props.parameter.type === 'Number') {
      this.props.onSave(this.props.parameter.text, Number(e.target.value));
    }
    if (this.props.parameter.type === 'String') {
      this.props.onSave(this.props.parameter.text, e.target.value);
    }
  }

  handleSwitch() {
    // console.log(!this.state.checked);
    this.props.onSave(this.props.parameter.text, !this.state.checked);
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { classes, parameter } = this.props;
    // console.log(parameter);
    if (parameter.type === 'Number') {
      return (
        <div>
          <Paper className={classes.root}>
              {parameter.text}
              <div>
                <TextField
                  id="full-width"
                  label={parameter.text}
                  className={classes.descField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={this.handleBlur}
                  margin="normal"
                  type="number"
                />
              </div>
          </Paper>
        </div>
      );
    }
    if (parameter.type === 'String') {
      return (
        <div>
          <Paper className={classes.root}>
            <span>
              {parameter.text}
            </span>
            <TextField
              id="full-width"
              label={parameter.text}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onBlur={this.handleBlur}
              type="text"
            />
          </Paper>
        </div>
      );
    }
    if (parameter.type === 'Bool') {
      return (
        <div>
          <Paper className={classes.root}>
            <Typography component="p">
              {parameter.text}
            </Typography>
            <Switch
              checked={this.state.checked}
              onChange={this.handleSwitch}
              onBlur={this.handleBlur}
            />
          </Paper>
        </div>
      );
    }
    return (
      <div>
        <Paper className={classes.root}>
          <Typography component="p">
            {parameter.text}
          </Typography>
        </Paper>
      </div>
    );
  }
}


ConfigParameter.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  parameter: PropTypes.objectOf.isRequired,
  onSave: PropTypes.func.isRequired,
  // parameterForm: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(ConfigParameter);
