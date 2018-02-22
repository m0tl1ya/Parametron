import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProjectList from '../components/ProjectList';
// import ModuleListToolbar from '../components/ModuleListToolBar'
import * as ProjectListActions from '../actions/projectListActions';
// import * as ParameterActions from '../actions/configModuleActions';
// import * as ModuleListEditActions from '../actions/moduleListEditActions';
import * as HeaderInfoActions from '../actions/headerInfoActions';

const ViewProjects = ({ projects, hasError, isLoading, actions }) => (
  <div>
    <ProjectList
      projects={projects}
      hasError={hasError}
      isLoading={isLoading}
      fetchData={actions.projectListActions.fetchProjects}
      getHeaderInfo={actions.headerInfoActions.getHeaderInfo}
      discardHeaderInfo={actions.headerInfoActions.discardHeaderInfo}
    />
  </div>
);

ViewProjects.propTypes = {
  projects: PropTypes.arrayOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  projects: state.projects,
  headerInfo: PropTypes.object.isRequired,
  hasError: state.getProjectsError,
  isLoading: state.loadProjects,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    projectListActions: bindActionCreators(ProjectListActions, dispatch),
    // moduleListEditActions: bindActionCreators(ModuleListEditActions, dispatch),
    // parameterActions: bindActionCreators(ParameterActions, dispatch),
    headerInfoActions: bindActionCreators(HeaderInfoActions, dispatch),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ViewProjects);
