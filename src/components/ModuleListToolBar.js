import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class ModuleListToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: SHOW_ALL,
      // modules: initModules,
      // editingModuleCard: this.props.isEditing,
      editingId: this.props.editingId,
      modules: this.props.modules,
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.selctForEdit = this.selctForEdit.bind(this);
  }
}

ModuleListToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  modules: PropTypes.array.isRequired,
};

export default withStyles(styles)(ModuleListToolbar);
