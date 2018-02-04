import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreateProjectHead from '../components/CreateProjectHead';

import * as ModuleListActions from '../actions/moduleListActions';
import * as HeaderInfoActions from '../actions/headerInfoActions';

const CreateProject = ({ modules, hasError, isLoading, selectedIds, title, description, actions }) => (
  <div>
    <CreateProjectHead
      modules={modules}
      hasError={hasError}
      isLoading={isLoading}
      fetchData={actions.moduleListActions.fetchModules}
      selectedIds={selectedIds}
      title={title}
      description={description}
      editTitle={actions.headerInfoActions.editTitle}
      editDescription={actions.headerInfoActions.editDescription}
      discardHeaderInfo={actions.headerInfoActions.discardHeaderInfo}
    />
  </div>
);

CreateProject.propTypes = {
  modules: PropTypes.array.isRequired,
  // title: PropTypes.object.isRequired,
  // description: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  modules: state.modules,
  hasError: state.getModulesError,
  isLoading: state.loadModules,
  selectedIds: state.idManager.selected,
  title: state.headerInfo.title,
  description: state.headerInfo.description,
});

// console.log(ConfigModuleActions);

const mapDispatchToProps = dispatch => ({
  actions: {
    moduleListActions: bindActionCreators(ModuleListActions, dispatch),
    headerInfoActions: bindActionCreators(HeaderInfoActions, dispatch),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
