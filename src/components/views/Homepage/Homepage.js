import React from 'react';
import styles from './Homepage.module.scss';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: 'Local', status: '125'},
  {id: 'Remote', status: '348'},
];

const demoContentTwo = [
  {id: 'Reservations', status: '125', name: 'reservation' },
  {id: 'Events', status: '348', name: 'concert'},
];

const Homepage = () => {
  return (
    <div className={styles.component}>
      <Container maxWidth = 'lg'>
        <h2 className={styles.title}>Order statistics</h2>
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type of order</TableCell>
                <TableCell>Number of order</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoContent.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
      <Container maxWidth = 'lg'>
        <h2 className={styles.title}>Reservations and events</h2>
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoContentTwo.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.name}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
};

export default Homepage;
