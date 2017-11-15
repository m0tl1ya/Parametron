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

let counter = 0;
function createData(name, type, value) {
  counter += 1;
  return { id: counter, name, type, value };
}

const columnData = [
  { id: 'parameterName', numeric: false, disablePadding: false, label: 'Parameter Name' },
  { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
  { id: 'value', numeric: false, disablePadding: false, label: 'Value' },
];

const data = [
  createData('learning rate', 'number', 6.0),
  createData('weight decay', 'number', 9.0),
  createData('normalize', 'bool', 'false'),
  createData('description', 'string', 'this is test'),

];


const ParameterTable = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            {columnData.map(column => {
              return (
                <TableCell
                  key={column.id}
                  numeric={column.numeric}
                  padding={column.disablePadding ? 'none' : 'default'}
                >
                {column.label}
                </TableCell>
              );
            }, this)}

          </TableRow>
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
};

// <TableCell>Parameter Name</TableCell>
// <TableCell>Type</TableCell>
// <TableCell>Value</TableCell>
ParameterTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParameterTable);
