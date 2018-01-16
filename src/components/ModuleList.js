import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import ModuleCard from './ModuleCard'

import { SHOW_ALL } from '../actions/parameterFilters';

const MODULE_FILTERS = {
  [SHOW_ALL]: () => true,
};


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});


class ModuleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: SHOW_ALL,
      // modules: initModules,
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { filter } = this.state;
    if (this.props.hasError) {
      return (
        <h4>Error!!</h4>
      );
    }
    if (this.props.isLoading) {
      return (
        <h4>No modules yet...</h4>
      );
    }
    const filteredModules = this.props.modules.filter(MODULE_FILTERS[filter]);
    // console.log(filteredParameters);
    return (
      <div>
        {filteredModules.map(module =>
          <ModuleCard
            key={module.id}
            name={module.name}
            description={module.description}
            updated={module.updateAt}
            parameters={module.parameters}
          />)}
      </div>
    );
  }
}

ModuleList.propTypes = {
  classes: PropTypes.object.isRequired,
  // modules: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  modules: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default withStyles(styles)(ModuleList);
