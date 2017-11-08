import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, type, value) {
  id += 1;
  return { id, name, type, value };
}

const data = [
  createData('learning rate', 'number', 6.0),
  createData('weight decay', 'number', 9.0),
  createData('normalize', 'bool', 'false'),
  createData('description', 'string', 'this is test'),

];


class ParameterTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableCell>Parameter Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Value</TableCell>
          </TableHead>
          <TableBody>
            {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.type}</TableCell>
                <TableCell numeric>{n.value}</TableCell>
              </TableRow>
            );
          })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

ParameterTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParameterTable);
