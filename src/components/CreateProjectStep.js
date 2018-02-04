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

import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Typography from 'material-ui/Typography';



import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class CreateProjectStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // filter: SHOW_ALL,
      modules: this.props.modules,
      selectedIds: this.props.selectedIds,
      activeStep: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
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
          <Button
            raised
            color="secondary"
            className={classes.button}
            onClick={this.handleClick}
          >
            Go to Creating Project
          </Button>
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

CreateProjectStep.propTypes = {
  classes: PropTypes.object.isRequired,
  modules: PropTypes.array.isRequired,
  selectedIds: PropTypes.array.isRequired,
  reset: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateProjectStep);
