import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ConfigProject from '../components/ConfigProject';

import * as ModuleListActions from '../actions/moduleListActions';
import * as HeaderInfoActions from '../actions/headerInfoActions';

const CreateConfigFile = ({ project, actions }) => (
  <div>
    <ConfigProject
      project={project}
      getHeaderInfo={actions.headerInfoActions.getHeaderInfo}
    />
  </div>
);

CreateConfigFile.propTypes = {
  project: PropTypes.arrayOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
};

const mapStateToProps = state => ({
  project: state.project,
});


const mapDispatchToProps = dispatch => ({
  actions: {
    moduleListActions: bindActionCreators(ModuleListActions, dispatch),
    headerInfoActions: bindActionCreators(HeaderInfoActions, dispatch),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateConfigFile);
