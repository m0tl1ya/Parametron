import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Checkbox from 'material-ui/Checkbox';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

import ParameterTable from './ParameterTable';
import ConfigModule from '../containers/ConfigModule';



const styles = theme => ({
  card: {
    maxWidth: 1000,
  },
  editButton: {
    marginTop: '2.0em',
  },
  // buttonBars: {
  //   margin: '0.5em',
  // },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  moduleArea: {
    padding: '1em',
  },
});

class ModuleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.id,
      // name: this.props.name,
      // description: this.props.description,
      // updated: this.props.updated,
      // parameters: this.props.parameters,
      checked: false,
      expanded: false,
      // editMode: false,//false
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  //
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //
  //   this.setState({ name: nextProps.name });
  //   this.setState({ description: nextProps.description });
  //   this.setState({ updated: nextProps.updated });
  //   this.setState({ parameters: nextProps.parameters });
  // }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleToggle() {
    if (!this.state.checked) {
      this.setState({
        checked: true,
      });
      this.props.selectedOn(this.props.id, true);
    } else {
      this.setState({
        checked: false,
      });
      this.props.selectedOn(this.props.id, false);
    }
  };

  handleEditClick() {
    // this.props.edit()
    // console.log(e);

    // this.setState({ editMode: !this.state.editMode });

    // log new state
    console.log(this.props.name);
    console.log(this.props.description);
    console.log(this.props.parameters);

    // log old state
    // console.log(this.state.name);
    // console.log(this.state.description);
    // console.log(this.state.parameters);

    // this.setState({ parameters: this.state.parameters });
    this.props.editModeOn(this.props.id)
    this.props.extractModule(
      this.props.name,
      this.props.description,
      this.props.parameters
    )

  }

  render() {
    const { classes, parameters } = this.props;
    // console.log(parameters[0])
    return (
      <div className={classes.moduleArea}>

        <Card className={classes.card}>
          <div className={classes.buttonBars}>
            <Checkbox
                    tabIndex={-1}
                    onChange={this.handleToggle}
                    checked={this.state.checked}
                    disableRipple={false}
                  />
            <Link to="/edit-module">
              <Button
                color="secondary"
                aria-label="edit"
                className={classes.editButton}
                onClick={this.handleEditClick}
              >
                <ModeEditIcon />
              </Button>
            </Link>
          </div>

          <CardHeader
            action={
              <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
              </IconButton>
            }
            title={this.props.name}
            subheader={this.props.description}
          >
          </CardHeader>

          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <ParameterTable
              parameters={parameters}>
            </ParameterTable>
          </Collapse>

        </Card>
      </div>
    );
    // if (!this.state.editMode) {
    //   return (
    //     <div className={classes.moduleArea}>
    //
    //       <Card className={classes.card}>
    //         <div className={classes.buttonBars}>
    //           <Checkbox
    //                   checked={false}
    //                   tabIndex={-1}
    //                   disableRipple={false}
    //                 />
    //           <Link to="/edit-module">
    //             <Button
    //               color="secondary"
    //               aria-label="edit"
    //               className={classes.editButton}
    //               onClick={this.handleEditClick}
    //             >
    //               <ModeEditIcon />
    //             </Button>
    //           </Link>
    //         </div>
    //
    //         <CardHeader
    //           action={
    //             <IconButton
    //                 className={classnames(classes.expand, {
    //                   [classes.expandOpen]: this.state.expanded,
    //                 })}
    //                 onClick={this.handleExpandClick}
    //                 aria-expanded={this.state.expanded}
    //                 aria-label="Show more"
    //               >
    //                 <ExpandMoreIcon />
    //             </IconButton>
    //           }
    //           title={this.props.name}
    //           subheader={this.props.description}
    //         >
    //         </CardHeader>
    //
    //         <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
    //           <ParameterTable
    //             parameters={parameters}>
    //           </ParameterTable>
    //         </Collapse>
    //
    //       </Card>
    //     </div>
    //   );
    //
    // } else {
    //   return (
    //     <div className={classes.moduleArea}>
    //
    //     </div>
    //   );
    // }
  }
}

ModuleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  updated: PropTypes.object.isRequired,
  parameters: PropTypes.object.isRequired,
  selectedOn: PropTypes.func.isRequired,
  // selectedOff: PropTypes.func.isRequired,
  editModeOn: PropTypes.func.isRequired,
  // edit: PropTypes.func.isRequired,
  extractModule: PropTypes.func.isRequired,
};


export default withStyles(styles)(ModuleCard);
