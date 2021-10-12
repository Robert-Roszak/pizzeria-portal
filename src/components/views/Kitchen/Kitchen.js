import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '345', order: 'pizza', details: 'tomato sauce, olives, mushrooms, salami'},
  {id: '2', order: 'salad', details: 'tomatoes, olives, cheese, pepper'},
  {id: '3', order: 'donut with coffee', details: 'latte'},
  {id: '6', order: 'pizza', details: 'tomato sauce, olives, mushrooms, salami'},
  {id: '355', order: 'salad', details: 'tomatoes, olives, cheese, pepper'},
  {id: '1', order: 'donut with coffee', details: 'expresso'},
];

const Kitchen = () => (
  <div className={styles.component}>
    <Container maxWidth = 'lg'>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table/Order number</TableCell>
              <TableCell>Dish</TableCell>
              <TableCell>Details</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.order}
                </TableCell>
                <TableCell>
                  {row.details}
                </TableCell>
                <TableCell>
                  <Button>Ready</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  </div>
);

export default Kitchen;
