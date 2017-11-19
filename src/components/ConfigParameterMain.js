import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import Paper from 'material-ui/Paper';
import ParameterItem from './ParameterItem';
import { SHOW_ALL } from '../actions/parameterFilters';

const PARAMETER_FILTERS = {
  [SHOW_ALL]: () => true,
}


class ConfigParameterMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: SHOW_ALL,
    };
    this.renderParameters = this.renderParameters.bind(this);
  }

  renderParameters() {
    // console.log(this.props.parameters);
    const parameterList = this.props.parameters.map(parameter => {
      // console.log(parameter);
      return (<ParameterItem
              key={parameter.id}
              parameter={ parameter }
              actions={ this.props.actions }
              />
      );
    });
    return parameterList;
  }

  render() {
    const { classes, parameters, actions } = this.props;
    const { filter } = this.state;
    console.log(parameters)
    const filteredParameters = parameters.filter(PARAMETER_FILTERS[filter]);
    // console.log(filteredParameters);
    return (
      <div>
        {filteredParameters.map(parameter =>
          <ParameterItem key={parameter.id} parameter={parameter} {...actions} />)}
      </div>
    );
  }
}

ConfigParameterMain.propTypes = {
  classes: PropTypes.object.isRequired,
  parameters: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired
};

export default ConfigParameterMain;
