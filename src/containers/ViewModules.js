import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ModuleList from '../components/ModuleList';
import * as ModuleListActions from '../actions/moduleListActions';

const ViewModules = ({ modules, hasError, isLoading, actions }) => (
  <div>
    <ModuleList
      modules={modules}
      hasError={hasError}
      isLoading={isLoading}
      fetchData={actions.fetchModules}
    />
  </div>
);

ViewModules.propTypes = {
  modules: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  modules: state.modules,
  hasError: state.getCommentsError,
  isLoading: state.loadComments
});

// console.log(ConfigModuleActions);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ModuleListActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(ViewModules);
