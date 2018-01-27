import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ConfigModuleHead from '../components/ConfigModuleHead';
import ConfigParameterHeader from '../components/ConfigParameterHeader';
import ConfigParameterMain from '../components/ConfigParameterMain';
import * as ConfigModuleActions from '../actions/configModuleActions';
import * as HeaderInfoActions from '../actions/headerInfoActions'

const ConfigModule = ({ parameters, headerInfo, actions }) => (
  <div>
    <ConfigModuleHead
      parameters={parameters}
      title={headerInfo.title}
      description={headerInfo.description}
      discardParameters={actions.configModuleActions.discardParameters}
      editTitle={actions.headerInfoActions.editTitle}
      editDescription={actions.headerInfoActions.editDescription}
      discardHeaderInfo={actions.headerInfoActions.discardHeaderInfo}
    />
    <ConfigParameterHeader addParameter={actions.configModuleActions.addParameter} />
    <ConfigParameterMain parameters={parameters} actions={actions.configModuleActions} />
  </div>
);

ConfigModule.propTypes = {
  parameters: PropTypes.array.isRequired,
  headerInfo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  parameters: state.parameters,
  headerInfo: state.headerInfo,
});

// console.log(ConfigModuleActions);

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(ConfigModuleActions, dispatch),
  actions: {
    configModuleActions: bindActionCreators(ConfigModuleActions, dispatch),
    headerInfoActions: bindActionCreators(HeaderInfoActions, dispatch),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ConfigModule);
