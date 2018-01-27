import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import ModuleCard from './ModuleCard'
import ConfigModule from '../containers/ConfigModule';

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
      editingId: this.props.editingId
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.selctForEdit = this.selctForEdit.bind(this);
  }

  componentWillMount() {
    this.setState({ filter: SHOW_ALL });
    this.setState({ editingId: -1 });
    // this.props.editModule(-1);
  }

  componentDidMount() {
    this.props.fetchData();
    this.props.editModule(-1);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ editingId: nextProps.editingId });
  }

  handleEditClick(data) {
    // this.setState({ editMode: true });
    // console.log(data);
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
    if (editingId !== -1) {
      const selectedModule = this.props.modules[editingId];
      // const filteredModules = this.props.modules.filter(MODULE_FILTERS[filter])
      return (
        <ModuleCard
          id={selectedModule.id}
          name={selectedModule.name}
          description={selectedModule.description}
          updated={selectedModule.updateAt}
          parameters={selectedModule.parameters}
          editMode={this.selctForEdit}
          extractParameters={this.handleEditClick}
        />

      );
    }
    const filteredModules = this.props.modules.filter(MODULE_FILTERS[filter])
    // console.log(filteredModules);
    // console.log(filteredModules[1]);
    // console.log(this.props.modules[1].parameters);
    // if (this.state.editMode) {
    //   return (
    //     <div>
    //       <ConfigModule
    //         parameters={filteredModules[1].parameters}
    //       />
    //     </div>
    //   )
    // }
    return (
      <div>
        {filteredModules.map(module =>
          <ModuleCard
            id={module.id}
            name={module.name}
            description={module.description}
            updated={module.updateAt}
            parameters={module.parameters}
            editMode={this.selctForEdit}
            extractParameters={this.handleEditClick}
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
  // editableParameters: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // isEditing: PropTypes.bool.isRequired,
  getParameters: PropTypes.func.isRequired,
  editModule: PropTypes.func.isRequired,
  editingId: PropTypes.number.isRequired,
};

export default withStyles(styles)(ModuleList);
