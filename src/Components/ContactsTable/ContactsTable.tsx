import React from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'

import TableProps from '../../Models/TableProps'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);

const ContactsTable = (props: TableProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.contacts.map(contact => (
            <TableRow key={contact.id}>
              <TableCell component="th" scope="row">
                {contact.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {contact.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {contact.email}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to={`/contacts/edit/${contact.id}`}>Edit</Link>
              </TableCell>
              <TableCell component="th" scope="row" onClick={() => props.deleteUser(contact.id)}>
                Delete
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ContactsTable