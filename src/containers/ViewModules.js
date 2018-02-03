import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ModuleList from '../components/ModuleList';
import * as ModuleListActions from '../actions/moduleListActions';
import * as ParameterActions from '../actions/configModuleActions';
import * as ModuleListEditActions from '../actions/moduleListEditActions';
import * as HeaderInfoActions from '../actions/headerInfoActions';

const ViewModules = ({ modules, editingId, hasError, isLoading, actions }) => (
  <div>
    <ModuleList
      modules={modules}
      editingId={editingId}
      hasError={hasError}
      isLoading={isLoading}
      fetchData={actions.moduleListActions.fetchModules}
      editModule={actions.moduleListEditActions.editModule}
      selectModule={actions.moduleListEditActions.selectModule}
      untickModule={actions.moduleListEditActions.untickModule}
      getParameters={actions.parameterActions.getParameters}
      getHeaderInfo={actions.headerInfoActions.getHeaderInfo}
    />
  </div>
);

ViewModules.propTypes = {
  modules: PropTypes.array.isRequired,
  // parameters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  // actions: PropTypes.object.isRequired,
  // actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  modules: state.modules,
  headerInfo: PropTypes.object.isRequired,
  // parameters: state.parameters,
  hasError: state.getModulesError,
  isLoading: state.loadModules,
  editingId: state.idManager.id,
  // isEditing: state.editModule,
});

// console.log(ConfigModuleActions);

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(Object.assign({}, ModuleListActions, ParameterActions), dispatch),
  actions: {
    moduleListActions: bindActionCreators(ModuleListActions, dispatch),
    moduleListEditActions: bindActionCreators(ModuleListEditActions, dispatch),
    parameterActions: bindActionCreators(ParameterActions, dispatch),
    headerInfoActions: bindActionCreators(HeaderInfoActions, dispatch),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ViewModules);
