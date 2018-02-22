import React, { Component } from 'react';
// import fs from 'fs';

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

import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import ConfigModule from './ConfigModule';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: blueGrey[50], // #afbbc9
    width: 400,
  },
  descField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: blueGrey[50], // #afbbc9
    width: 500,
  },
  button: {
    margin: '0.1em',
  },
});

let settingTargetFrame = {};

class ConfigProject extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: 'one',
    // };
    this.handleSave = this.handleSave.bind(this);
    // this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillMount() {
    // const project = this.props;
    settingTargetFrame = {};

    settingTargetFrame.name = this.props.project.name;
    settingTargetFrame.description = this.props.project.description;
    this.props.project.modules.map((module) => {
      let settingModule = {};
      // settingModule.name = module.name;
      settingModule.description = module.description;
      settingModule.parameters = {};
      module.parameters.map((parameter) => {
        if (parameter.type === 'Number') {
          settingModule.parameters[parameter.text] = 0;
        }
        if (parameter.type === 'Bool') {
          settingModule.parameters[parameter.text] = false;
        }
        if (parameter.type === 'String') {
          settingModule.parameters[parameter.text] = '';
        }
      }),
      settingTargetFrame[module.name] = settingModule;
    },
    );
    console.log(settingTargetFrame);
  }

  componentWillUnmount() {
    console.log(settingTargetFrame);
  }

  handleSave() {
    // const remote = require('electron').remote;
    // const electronFs = remote.require('fs');
    // electronFs.writeFile('hoge.json', JSON.stringify(settingTargetFrame, null, '    '));
    // const storage = require('electron-json-storage');
    // storage.set('./config.json', settingTargetFrame, function (error) {
    // if (error) throw error;
    // });
    // const blob = new Blob([JSON.stringify(settingTargetFrame, null, '  ')], {type: 'application\/json'});

    // const writeJsonFile = require('write-json-file');
    //
    // writeJsonFile('./foo.json', settingTargetFrame).then(() => {
    //     console.log('done');
    // });
    console.log(settingTargetFrame);
  }

  render() {
    const { classes, project } = this.props;
    // console.log(project); // true after this.setState({ editing: true });
    // let i = 0;
    return (
      <div>
        <Button
          raised
          color="secondary"
          className={classes.button}
          onClick={this.handleSave}
        >
        Save
        </Button>
        {project.modules.map(module =>
          <ConfigModule
            module={module}
            moduleForm={settingTargetFrame[module.name]}
          />)}
      </div>
    );
  }
}

ConfigProject.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  project: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(ConfigProject);
