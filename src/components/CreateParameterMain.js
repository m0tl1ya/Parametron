import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ParameterItem from './ParameterItem';
import { SHOW_ALL } from '../actions/parameterFilters';

const PARAMETER_FILTERS = {
  [SHOW_ALL]: () => true,
};


class CreateParameterMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: SHOW_ALL,
    };
    // this.renderParameters = this.renderParameters.bind(this);
  }


  render() {
    const { parameters, actions } = this.props;
    const { filter } = this.state;

    // console.log(parameters)
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

CreateParameterMain.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  parameters: PropTypes.arrayOf.isRequired,
  actions: PropTypes.func.isRequired,
};

export default CreateParameterMain;
