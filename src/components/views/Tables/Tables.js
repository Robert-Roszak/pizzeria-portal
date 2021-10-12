import React from 'react';
import styles from './Tables.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const demoContent = [
  {hour: '12:00', status: 'FREE', event: 'new event'},
  {hour: '12:30', status: 'BOOKED', event: 'new event'},
  {hour: '13:00', status: 'BOOKED', event: 'new event'},
  {hour: '13:30', status: 'FREE', event: 'new event'},
  {hour: '14:00', status: 'BOOKED', event: 'new event'},
  {hour: '14:30', status: 'BOOKED', event: 'new event'},
  {hour: '15:00', status: 'FREE', event: 'new event'},
  {hour: '15:30', status: 'FREE', event: 'new event'},
  {hour: '16:00', status: 'FREE', event: 'new event'},
  {hour: '16:30', status: 'FREE', event: 'new event'},
  {hour: '17:00', status: 'FREE', event: 'new event'},
  {hour: '17:30', status: 'FREE', event: 'new event'},
  {hour: '18:00', status: 'FREE', event: 'new event'},
  {hour: '18:30', status: 'FREE', event: 'new event'},
  {hour: '19:00', status: 'FREE', event: 'new event'},
  {hour: '19:30', status: 'FREE', event: 'new event'},
  {hour: '20:00', status: 'FREE', event: 'new event'},
  {hour: '20:30', status: 'FREE', event: 'new event'},
  {hour: '21:00', status: 'FREE', event: 'new event'},
  {hour: '21:30', status: 'FREE', event: 'new event'},
  {hour: '22:00', status: 'FREE', event: 'new event'},
  {hour: '22:30', status: 'FREE', event: 'new event'},
  {hour: '23:00', status: 'FREE', event: 'new event'},
  {hour: '23:30', status: 'FREE', event: 'new event'},

];

const renderActions = status => {
  switch (status) {
    case 'FREE':
      return (
        <>
          <Button>new booking</Button>
        </>
      );
    case 'BOOKED':
      return (
        <Button>edit booking</Button>
      );
    case 'new event':
      return (
        <Button>new event</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div className={styles.component}>
    <TextField
      className={styles.date}
      id="date"
      label="Date"
      type="date"
      defaultValue="2021-06-07"
      InputLabelProps={{
        shrink: true,
      }}
    />
    <Paper className={styles.component}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
                {renderActions(row.event)}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
                {renderActions(row.event)}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
                {renderActions(row.event)}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
                {renderActions(row.event)}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
                {renderActions(row.event)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
export default Tables;
