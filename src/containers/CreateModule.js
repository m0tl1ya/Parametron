import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreateModuleHead from '../components/CreateModuleHead';
import CreateParameterHeader from '../components/CreateParameterHeader';
import CreateParameterMain from '../components/CreateParameterMain';
import * as CreateModuleActions from '../actions/createModuleActions';
import * as HeaderInfoActions from '../actions/headerInfoActions';

const CreateModule = ({ parameters, title, description, actions }) => (
  <div>
    <CreateModuleHead
      parameters={parameters}
      title={title}
      description={description}
      discardParameters={actions.createModuleActions.discardParameters}
      editTitle={actions.headerInfoActions.editTitle}
      editDescription={actions.headerInfoActions.editDescription}
      discardHeaderInfo={actions.headerInfoActions.discardHeaderInfo}
    />
    <CreateParameterHeader addParameter={actions.createModuleActions.addParameter} />
    <CreateParameterMain parameters={parameters} actions={actions.createModuleActions} />
  </div>
);

CreateModule.propTypes = {
  parameters: PropTypes.arrayOf.isRequired,
  title: PropTypes.objectOf.isRequired,
  description: PropTypes.objectOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
};

const mapStateToProps = state => ({
  parameters: state.parameters,
  title: state.headerInfo.title,
  description: state.headerInfo.description,
});

// console.log(CreateModuleActions);

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(CreateModuleActions, dispatch),
  actions: {
    createModuleActions: bindActionCreators(CreateModuleActions, dispatch),
    headerInfoActions: bindActionCreators(HeaderInfoActions, dispatch),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateModule);
