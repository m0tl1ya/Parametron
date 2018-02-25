import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';


import { withStyles } from 'material-ui/styles';

import TextField from 'material-ui/TextField';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Switch from 'material-ui/Switch';
import Checkbox from 'material-ui/Checkbox';

import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';

import range from '../lib/range'

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


class ConfigParameterWithNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      min: 0,
      max: 10,
      step: 1,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleSave = this.handleSave.bind(this);
    // this.handleType = this.handleType.bind(this);
  }

  componentWillMount() {
    // console.log(this.props.parameterForm);
  }


  handleToggle() {
    if (!this.state.checked) {
      this.setState({
        checked: true,
      });
    } else {
      this.setState({
        checked: false,
      });
    }
  }

  handleChange = name => event => {
    // console.log(Number(event.target.value));
    // console.log(name);
    this.setState({ [name]: Number(event.target.value) });
  };

  handleBlur(e) {
    if (this.state.checked) {
      this.props.saveSingleValue(e);
    } else {
      this.props.saveArray(range(this.state.min, this.state.max, this.state.step));
    }
  }

  render() {
    const { classes, parameter } = this.props;
    // console.log(parameter);
    let element;
    if (this.state.checked) {
      element = (
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
      );
    } else {
      element = (
        <span>
          <TextField
            id="full-width"
            label="Min"
            className={classes.descField}
            InputLabelProps={{
              shrink: true,
            }}
            onBlur={this.handleBlur}
            onChange={this.handleChange('min')}
            margin="normal"
            type="number"
            defaultValue={this.state.min}
            value={this.state.min}
          />
          <TextField
            id="full-width"
            label="Max"
            className={classes.descField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('max')}
            onBlur={this.handleBlur}
            margin="normal"
            type="number"
            defaultValue={this.state.max}
            value={this.state.max}
          />
          <TextField
            id="full-width"
            label="Step"
            className={classes.descField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange('step')}
            onBlur={this.handleBlur}
            margin="normal"
            type="number"
            defaultValue={this.state.step}
            value={this.state.step}
          />
      </span>
      );
    }
    return (
      <div>
        <Paper className={classes.root}>
          <div>
            {parameter.text}
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onChange={this.handleToggle}
                    checked={this.state.checked}
                    disableRipple={false}
                  />
                }
                label="fixed"
              />
              {element}
            </div>


          </div>
        </Paper>
      </div>
    );
  }
}


ConfigParameterWithNumber.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  parameter: PropTypes.objectOf.isRequired,
  saveSingleValue: PropTypes.func.isRequired,
  saveArray: PropTypes.func.isRequired,
  // parameterForm: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(ConfigParameterWithNumber);
