import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { blueGrey } from 'material-ui/colors';
import { Link } from 'react-router-dom';


import DiscardDialog from './DiscardDialog';

import db from '../lib/db';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: blueGrey[50],// #afbbc9
    width: 400,
  },
  descField: {
    marginLeft: theme.spacing.unit*7,
    marginRight: theme.spacing.unit,
    background: blueGrey[50],// #afbbc9
    width: 500,
  },
  button: {
    top: '0.0em',
  }
});


class ConfigModuleHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      parameters: this.props.parameters,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);  }

  // componentDidMount() {
  //   // this.setState({ parameters: this.props.parameters });
  //   // console.log(this.state);
  //   console.log("component mounted")
  // }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ parameters: nextProps.parameters });
  }

  // componentWillUnmount() {
  //   this.setState({ name: '' });
  //   this.setState({ description: '' });
  //   this.props.discardParameters();
  // }

  handleChange = name => event => {
    // console.log('handleChange');
    this.setState({ [name]: event.target.value });
  }

  handleSave() {
    // console.log(this.props.parameters);
    // this.setState({ parameters: this.props.parameters });

    console.log(this.props.parameters.length);
    if (this.props.parameters.length > 0) {
      if (true) {
        console.log(this.state);
      }
      db.modules.put({
        name: this.state.name,
        description: this.state.description,
        parameters: this.state.parameters,
        updateAt: new Date()
      });

      db.modules
      .toArray()
      .then(function (module) {
        console.log('ok');
        console.log(module[0].parameters);
      });

      this.setState({ name: '' });
      this.setState({ description: '' });
      this.props.discardParameters();

    } else {

    }
  }

  handleDiscard() {
    this.setState({ name: '' });
    this.setState({ description: '' });
    this.props.discardParameters();
  }


  render() {
    const { classes } = this.props;

    return (
      <div className="ConfigModuleHeader">
        <div>
          <DiscardDialog
            discard={this.handleDiscard}
          />
          <TextField
            id="module-name"
            className={classes.textField}
            label="Module Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            fullWidth
            margin="normal"
          />
          <Button
            raised
            color="primary"
            className={classes.button}
            onClick={this.handleSave}
          >
          Save
          </Button>
        </div>
        <div>
          <TextField
          id="full-width"
          label="Description"
          className={classes.descField}
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        </div>

      <Divider />


      </div>
    );
  }
}

ConfigModuleHead.propTypes = {
  classes: PropTypes.object.isRequired,
  parameters: PropTypes.object.isRequired,
  discardParameters: PropTypes.func.isRequired,
};

export default withStyles(styles)(ConfigModuleHead);
