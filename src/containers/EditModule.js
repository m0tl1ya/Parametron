import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import EditModuleHead from '../components/EditModuleHead';
import ConfigParameterHeader from '../components/ConfigParameterHeader';
import ConfigParameterMain from '../components/ConfigParameterMain';
import * as ConfigModuleActions from '../actions/configModuleActions';
import * as HeaderInfoActions from '../actions/headerInfoActions';

const EditModule = ({ editingId, parameters, title, description, actions }) => (
  <div>
    <EditModuleHead
      moduleId={editingId}
      parameters={parameters}
      title={title}
      description={description}
      discardParameters={actions.configModuleActions.discardParameters}
      editTitle={actions.headerInfoActions.editTitle}
      editDescription={actions.headerInfoActions.editDescription}
      discardHeaderInfo={actions.headerInfoActions.discardHeaderInfo}
    />
    <ConfigParameterHeader addParameter={actions.configModuleActions.addParameter} />
    <ConfigParameterMain parameters={parameters} actions={actions.configModuleActions} />
  </div>
);

EditModule.propTypes = {
  parameters: PropTypes.array.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  editingId: state.idManager.id,
  parameters: state.parameters,
  title: state.headerInfo.title,
  description: state.headerInfo.description,
});

// console.log(ConfigModuleActions);

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(ConfigModuleActions, dispatch),
  actions: {
    configModuleActions: bindActionCreators(ConfigModuleActions, dispatch),
    headerInfoActions: bindActionCreators(HeaderInfoActions, dispatch),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(EditModule);
