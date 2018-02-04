import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import ModuleCard from './ModuleCard';

import { SHOW_ALL, SHOW_SELECTED } from '../actions/parameterFilters';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});


class ModuleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: SHOW_ALL,
      // modules: initModules,
      // editingModuleCard: this.props.isEditing,
      editingId: this.props.editingId,
      modules: this.props.modules,
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.selctForEdit = this.selctForEdit.bind(this);
  }

  componentWillMount() {
    this.setState({ filter: SHOW_ALL });
    // this.setState({ editingId: -1 });
    this.props.editModule(-100);
    this.props.fetchData();
    // this.props.fetchData();
  }

  componentDidMount() {
    // this.props.fetchData();
    // this.props.editModule(-1);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ editingId: nextProps.editingId });
    this.setState({ modules: nextProps.modules });
  }

  handleSelect(id, newChecked) {
    if (newChecked) {
      this.props.selectModule(id);
    } else {
      this.props.untickModule(id);
    }
  }

  handleEditClick(title, descriptioin, data) {
    // this.setState({ editMode: true });
    // console.log(data);
    this.props.getHeaderInfo(title, descriptioin);
    this.props.getParameters(data);
  }

  selctForEdit(id) {
    this.props.editModule(id - 1);
    // this.setState({ filter: SHOW_SELECTED });
    // console.log(id);
  }

  render() {
    const { filter, editingId } = this.state;
    const MODULE_FILTERS = {
      [SHOW_ALL]: () => true,
      [SHOW_SELECTED]: (module) => module.id == editingId,
    };
    // console.log(editingId);
    if (this.props.hasError) {
      return (
        <h4>Error!!</h4>
      );
    }
    if (this.props.isLoading) {
      return (
        <h4>No modules yet...</h4>
      );
    }
    // const filteredModules = this.state.modules; //.filter(MODULE_FILTERS[filter]);

    return (
      <div>
        {this.state.modules.map(module =>
          <ModuleCard
            id={module.id}
            name={module.name}
            description={module.description}
            updated={module.updateAt}
            parameters={module.parameters}
            selectedOn={this.handleSelect}
            editModeOn={this.selctForEdit}
            extractModule={this.handleEditClick}
          />)}
      </div>
    );
  }
}

ModuleList.propTypes = {
  classes: PropTypes.object.isRequired,
  // modules: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  modules: PropTypes.array.isRequired,
  editingId: PropTypes.number.isRequired,
  // editableParameters: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // isEditing: PropTypes.bool.isRequired,
  editModule: PropTypes.func.isRequired,
  selectModule: PropTypes.func.isRequired,
  untickModule: PropTypes.func.isRequired,
  getParameters: PropTypes.func.isRequired,
  getHeaderInfo: PropTypes.func.isRequired,
};

export default withStyles(styles)(ModuleList);
