import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import ModuleCard from './ModuleCard'

import { SHOW_ALL } from '../actions/parameterFilters';

import db from '../lib/db';

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


let initModules = [];

// db.modules.toArray().then(function (modules) {
//     // console.log('add');
//   modules.map(function (module) {
//     console.log(module);
//     initModules.push(module);
//     console.log(initModules.length);
//       // console.log(result);
//
//   });
//
// });


class ModuleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: SHOW_ALL,
      // modules: initModules,
    };
  }

  // componentWillMount() {
  //   // this.props.loadModules();
  //
  //   // let initModules = new Array();
  //
  //   db.modules.toArray().then(function (modules) {
  //     // console.log('add');
  //     modules.map(function (module) {
  //       console.log(module);
  //       initModules.push(module);
  //       // initModules[index] = module;
  //       console.log(initModules.length);
  //       // console.log(result);
  //
  //     });
  //
  //   });
  //   // let moduleArray = []
  //   //
  //   // moduleArray = db['modules'].toArray()
  //   // console.log(moduleArray)
  //   // moduleArray.map(function (module) {
  //   //   console.log(module);
  //   //   initModules.push(module);
  //   //   // initModules[index] = module;
  //   //   console.log(initModules.length);
  //   //   // console.log(result);
  //   //
  //   // });
  //
  //   this.setState({ modules: initModules });
  //   console.log('this.state.modules');
  //   console.log(this.state.modules);
  //   console.log(initModules.length)
  // }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    // const { modules } = this.props.modules;
    // const { filter, modules } = this.state;
    // console.log('before if');
    // console.log(this.state.modules);
    // console.log(this.state.modules[0]);
    // console.log('length');
    // console.log(this.state.modules.length);
    // if (!this.state.modules || this.state.modules.length < 1) {
    //   return (
    //     <h4>No modules yet...</h4>
    //   );
    // }
    //
    // console.log('before filter');
    // console.log(modules[0]);
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
