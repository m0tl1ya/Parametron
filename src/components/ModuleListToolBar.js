import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { blueGrey } from 'material-ui/colors';
import { Link } from 'react-router-dom';

import DiscardDialog from './DiscardDialog';
import { SHOW_ALL, SHOW_SELECTED } from '../actions/parameterFilters';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit * 7,
    marginRight: theme.spacing.unit,
    background: blueGrey[50], // #afbbc9
    width: 400,
  },
  descField: {
    marginLeft: theme.spacing.unit * 7,
    marginRight: theme.spacing.unit,
    background: blueGrey[50], // #afbbc9
    width: 500,
  },
});


class ModuleListToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // filter: SHOW_ALL,
      modules: this.props.modules,
      selectedIds: this.props.selectedIds,
      creatingProject: false,
    };
    this.handleClick = this.handleClick.bind(this)
    // this.handleEditClick = this.handleEditClick.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);
    // this.selctForEdit = this.selctForEdit.bind(this);
  }

  componentWillMount() {
    this.props.reset();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedIds: nextProps.selectedIds });
    this.setState({ creatingProject: false });
  }

  handleClick() {
    this.setState({ creatingProject: !this.state.creatingProject });
  }

  render() {
    const { classes } = this.props;
    const MODULE_FILTERS = {
      [SHOW_ALL]: () => true,
      // [SHOW_SELECTED]: (module) => module.id == editingId,
    };
    let element;
    if (this.state.selectedIds.length > 0) {
      if (!this.state.creatingProject) {
        element = (
          <Link to="/create-project">
            <Button
              raised
              color="secondary"
              className={classes.button}
              onClick={this.handleClick}
            >
              Go to Creating Project
            </Button>
          </Link>
        );
      } else {
        element = (
          <div className="ConfigModuleHeader">
            <div>
              <Button
                raised
                color="secondary"
                className={classes.button}
                onClick={this.handleClick}
              >
                Cancel
              </Button>
            </div>
            <div>
              <TextField
                id="module-name"
                className={classes.textField}
                label="Module Name"
                value={this.state.name}
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
                margin="normal"
              />
            </div>

            <Divider />

          </div>
        );
      }
    } else {
      element = (
        <div />
      );
    }
    return (
      <div>
        <div>
          {element}
        </div>
      </div>
    );
  }
}

ModuleListToolbar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  modules: PropTypes.arrayOf.isRequired,
  selectedIds: PropTypes.arrayOf.isRequired,
  reset: PropTypes.func.isRequired,
};

export default withStyles(styles)(ModuleListToolbar);
