import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import ProjectCard from './ProjectCard';

// import { SHOW_ALL, SHOW_SELECTED } from '../actions/parameterFilters';


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


class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // filter: SHOW_ALL,
      projects: this.props.projects,
    };
  }

  componentWillMount() {
    // this.setState({ filter: SHOW_ALL });
    this.props.fetchData();
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ projects: nextProps.projects });
  }

  render() {
    // console.log(editingId);
    if (this.props.hasError) {
      return (
        <h4>Error!!</h4>
      );
    }
    if (this.props.isLoading) {
      return (
        <h4>No projects yet...</h4>
      );
    }

    return (
      <div>
        {this.state.projects.map(project =>
          <ProjectCard
            id={project.id}
            name={project.name}
            description={project.description}
            updated={project.updateAt}
            modules={project.modules}
          />)}
      </div>
    );
  }
}

ProjectList.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  fetchData: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // editModule: PropTypes.func.isRequired,
  // selectModule: PropTypes.func.isRequired,
  // untickModule: PropTypes.func.isRequired,
  // getParameters: PropTypes.func.isRequired,
  // getHeaderInfo: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProjectList);
