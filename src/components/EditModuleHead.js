import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'


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


import BackDialog from './BackDialog';

import db from '../lib/db';

const styles = theme => ({
  header: {
    alignItems: 'center',
  },
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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});


class EditModuleHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.title,  //'',
      description: this.props.description, //'',
      parameters: this.props.parameters,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSaveAsNew = this.handleSaveAsNew.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // this.setState({ name: nextProps.title });
    // this.setState({ description: nextProps.description });
    this.setState({ parameters: nextProps.parameters });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });

  }

  handleBlur = name => event => {
    // this.setState({ [name]: event.target.value });
    if (name == 'name') {
      this.props.editTitle(event.target.value);
    }
    if (name == 'description') {
      this.props.editDescription(event.target.value);
    }

  }

  handleSave() {
    console.log(this.props.moduleId);
    if (this.props.title.length > 0 && this.props.parameters.length > 0) {
      db.modules.update(this.props.moduleId + 1, {
        name: this.state.name,
        description: this.state.description,
        parameters: this.state.parameters,
        updateAt: new Date()
      });
      this.handleDiscard();

      // this.setState({ name: '' });
      // this.setState({ description: '' });
      // this.props.discardHeaderInfo();
      // this.props.discardParameters();

    } else {
      // console.log('not save');
    }
  }

  handleSaveAsNew() {
    if (this.props.title.length > 0 && this.props.parameters.length > 0) {
      db.modules.put({
        name: this.state.name,
        description: this.state.description,
        parameters: this.state.parameters,
        updateAt: new Date()
      });
      this.handleDiscard();

    } else {
      // console.log('not save');
    }

  }

  handleDelete() {
    db.modules.delete(this.props.moduleId + 1);
    console.log(this.props.moduleId);
    this.handleDiscard();
  }

  handleDiscard() {
    this.setState({ name: '' });
    this.setState({ description: '' });
    this.props.discardHeaderInfo()
    this.props.discardParameters();
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="header">
          <BackDialog
            discard={this.handleDiscard}
          />
          <TextField
            id="module-name"
            className={classes.textField}
            label="Module Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            onBlur={this.handleBlur('name')}
            fullWidth
            margin="normal"
          />
          <Link to="/module-list" style={{ textDecoration: 'none' }}>
            <Button
              raised
              color="primary"
              className={classes.button}
              onClick={this.handleSave}
            >
              Save
            </Button>
          </Link>

          <span />
          <Link to="/module-list" style={{ textDecoration: 'none' }}>
          <Button
            raised
            color="primary"
            className={classes.button}
            onClick={this.handleSaveAsNew}
          >
            Save as New
          </Button>
          </Link>
          <Link to="/module-list">
          <Button
            raised
            color="primary"
            className={classes.button}
            onClick={this.handleDelete}
          >
            <DeleteIcon />
          </Button>
          </Link>
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
            onBlur={this.handleBlur('description')}
            margin="normal"
          />
        </div>

        <Divider />


      </div>
    );
  }
}

EditModuleHead.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  moduleId: PropTypes.number.isRequired,
  title: PropTypes.objectOf.isRequired,
  description: PropTypes.objectOf.isRequired,
  parameters: PropTypes.objectOf.isRequired,
  discardParameters: PropTypes.func.isRequired,
  editTitle: PropTypes.func.isRequired,
  editDescription: PropTypes.func.isRequired,
  discardHeaderInfo: PropTypes.func.isRequired,
};

export default withStyles(styles)(EditModuleHead);
