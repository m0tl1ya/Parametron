import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParameterTextInput from './ParameterTextInput';

class CreateParameterHeader extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addParameter(text.replace(/\s/g, '_'));
    }
  }

  render() {
    return (
      <header className="header">
        <ParameterTextInput
          newParameter
          onSave={this.handleSave}
          placeholder="Input parameter name"
        />
      </header>
    );
  }
}

CreateParameterHeader.propTypes = {
  addParameter: PropTypes.func.isRequired,
};

export default CreateParameterHeader;
