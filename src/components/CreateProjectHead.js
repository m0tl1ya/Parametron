import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { blueGrey } from 'material-ui/colors';
import { Link } from 'react-router-dom';

import ModulePanel from './ModulePanel';
import DiscardDialog from './DiscardDialog';
import db from '../lib/db';

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
  confirmation: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '33.33%',
    flexShrink: 0,
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit,
  }
});


class CreateProjectHead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: SHOW_SELECTED,
      description: this.props.name,
      description: this.props.description,
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
  }

  componentWillMount() {
    // this.props.reset();
    this.setState({ filter: SHOW_SELECTED });
    this.setState({ name: '' });
    this.setState({ description: '' });
    this.props.fetchData();
    // const filteredModules = this.props.modules.filter(MODULE_FILTERS[SHOW_SELECTED]);
    // this.setState({ filteredModules: filteredModules });
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({ selectedIds: nextProps.selectedIds });
    // // this.setState({ creatingProject: false });
    // this.setState({ modules: nextProps.modules });
  }

  handleClick() {
    // this.setState({ creatingProject: !this.state.creatingProject });
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
    // console.log(this.props.parameters);
    // this.setState({ parameters: this.props.parameters });

    // console.log(this.props.parameters.length);
    if (this.props.title.length > 0) {
      db.projects.put({
        name: this.state.name,
        description: this.state.description,
        modules: this.props.modules.filter( module =>
          this.props.selectedIds.indexOf(module.id) >= 0
        ),
        updateAt: new Date(),
      });

      this.setState({ name: '' });
      this.setState({ description: '' });
      this.props.discardHeaderInfo();

    } else {
      console.log('not save');
    }
  }

  handleDiscard() {
    const { modules } = this.props;
    const filteredModules = modules.filter( module =>
      this.props.selectedIds.indexOf(module.id) >= 0
    );
    console.log(filteredModules);
    this.props.discardHeaderInfo()
  }


  render() {
    const { classes } = this.props;
    const { filter } = this.state;
    const MODULE_FILTERS = {
      [SHOW_ALL]: () => true,
      [SHOW_SELECTED]: module => this.props.selectedIds.indexOf(module.id) >= 0,
    };
    const filteredModules = this.props.modules.filter(MODULE_FILTERS[filter]);

    return (
      <div>
        <div className="ConfigModuleHeader">
          <Link to="/module-list">
            <Button
              raised
              color="secondary"
              className={classes.button}
              onClick={this.handleDiscard}
            >
              Cancel
            </Button>
          </Link>
          <div>
            <TextField
              id="project-name"
              className={classes.textField}
              label="Module Name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              onBlur={this.handleBlur('name')}
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
              onBlur={this.handleBlur('description')}
              margin="normal"
            />
          </div>

          <Divider />
          <Typography className={classes.confirmation}>
            Confirm selected modules.
          </Typography>

        </div>
        <div>
          {filteredModules.map(module =>
            <ModulePanel
              id={module.id}
              name={module.name}
              description={module.description}
              updated={module.updateAt}
              parameters={module.parameters}
            />)}
        </div>
      </div>
    );
  }
}

CreateProjectHead.propTypes = {
  classes: PropTypes.object.isRequired,
  modules: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedIds: PropTypes.array.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  editTitle: PropTypes.func.isRequired,
  editDescription: PropTypes.func.isRequired,
  discardHeaderInfo: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateProjectHead);
