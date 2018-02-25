import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import ProjectCard from './ProjectCard';
import ConfigProject from './ConfigProject';

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
      setting: false,
      settingId: null,
    };
    this.handleConfigClick = this.handleConfigClick.bind(this);
  }

  componentWillMount() {
    // this.setState({ filter: SHOW_ALL });
    this.props.fetchData();
    this.setState({ setting: false });
    this.setState({ settingId: null });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ projects: nextProps.projects });
  }

  componentDidUpdate() {
    this.props.discardHeaderInfo();
  }

  handleConfigClick(id) {
    // this.props.getHeaderInfo(title, description);
    this.setState({ setting: true });
    this.setState({ settingId: id - 1 });
    // this.props.getParameters(data);
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
    if (this.state.setting) {
      return (
        <ConfigProject
          project={this.state.projects[this.state.settingId]}
        />
      );
    }
// project={this.state.projects.filter(project => project.id === 1)}

    return (
      <div>
        {this.state.projects.map(project =>
          <ProjectCard
            id={project.id}
            name={project.name}
            description={project.description}
            updated={project.updateAt}
            modules={project.modules}
            extractProject={this.handleConfigClick}
          />)}
      </div>
    );
  }
}

ProjectList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // getHeaderInfo: PropTypes.func.isRequired,
  discardHeaderInfo: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProjectList);
