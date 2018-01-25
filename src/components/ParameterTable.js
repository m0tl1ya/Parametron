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
    paddingBottom: '1em'
  },
  table: {
    minWidth: 700,
  },
});

// let counter = 0;
// function createData(name, type) {
//   counter += 1;
//   return { id: counter, name, type };
// }

const columnData = [
  {
    id: 'parameterName', numeric: false, disablePadding: false, label: 'Parameter Name',
  },
  {
    id: 'type', numeric: false, disablePadding: false, label: 'Type',
  },
  // { id: 'value', numeric: false, disablePadding: false, label: 'Value' },
];

// const data = [
//   createData('learning rate', 'number', 6.0),
//   createData('weight decay', 'number', 9.0),
//   createData('normalize', 'bool', 'false'),
//   createData('description', 'string', 'this is test'),
//
// ];


const ParameterTable = (props) => {
  const { classes, parameters } = props;

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
          {parameters.map(parameter => {
          return (
            <TableRow key={parameter.id}>
              <TableCell>{parameter.text}</TableCell>
              <TableCell>{parameter.type}</TableCell>
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
  parameters: PropTypes.array.isRequired,
};

export default withStyles(styles)(ParameterTable);
