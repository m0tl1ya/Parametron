import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ConfigModuleHead from '../components/ConfigModuleHead';
import ConfigParameterHeader from '../components/ConfigParameterHeader';
import ConfigParameterMain from '../components/ConfigParameterMain';
import * as ConfigModuleActions from '../actions/configModuleActions';

const ConfigModule = ({ parameters, actions }) => (
  <div>
    <ConfigModuleHead parameters={parameters} />
    <ConfigParameterHeader addParameter={actions.addParameter} />
    <ConfigParameterMain parameters={parameters} actions={actions} />
  </div>
);

ConfigModule.propTypes = {
  parameters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  parameters: state.parameters,
});

// console.log(ConfigModuleActions);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ConfigModuleActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(ConfigModule);
