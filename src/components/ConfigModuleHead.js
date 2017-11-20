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
import { Link } from 'react-router-dom'


import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';



// const moduleData = [
//   {
//     name: '',
//     description: '',
//     parameters: [],
//   },
// ];


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: blueGrey[50],// #afbbc9
    width: 400,
  },
  descField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: blueGrey[50],// #afbbc9
    width: 500,
  },
  addButton: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});


class ConfigModuleHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      parameters: this.props.parameters,
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRequestOpen = this.handleRequestOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  // componentDidMount() {
  //   this.setState({ parameters: this.props.parameters });
  //   // console.log(this.state);
  // }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ parameters: nextProps.parameters });
  }

  handleChange = name => event => {
    // console.log('handleChange');
    this.setState({ [name]: event.target.value });
  }

  handleSave() {
    // console.log(this.props.parameters);
    // this.setState({ parameters: this.props.parameters });
    console.log(this.state);
    localStorage.setItem(this.state.name, JSON.stringify(this.state));
  }


  handleRequestOpen() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    // console.log('Dialig closed');
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="ConfigModuleHeader">
        <IconButton className={classes.button} aria-label="Delete"
                    onClick={this.handleRequestOpen}>
          <ClearIcon />
        </IconButton>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{"Do you discard settings?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you discard settings?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/project-table">
            <Button color="primary">
              Discard
            </Button>
            </Link>
            <Button onClick={this.handleRequestClose} color="primary" autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
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
};

export default withStyles(styles)(ConfigModuleHead);
