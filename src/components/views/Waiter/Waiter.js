import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

class Waiter extends React.Component {

  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.any,
    updateTableStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, order, status) {
    const { updateTableStatus } = this.props;
    const thinking = <Button onClick={() => updateTableStatus(id, order, 'thinking')}>thinking</Button>;
    const ordered = <Button as={Link} to={process.env.PUBLIC_URL + '/waiter/order/new'} onClick={() => updateTableStatus(id, order, 'ordered')}>new order</Button>;
    const free = <Button onClick={() => updateTableStatus(id, null, 'free')}>free</Button>;
    const prepared = <Button onClick={() => updateTableStatus(id, order, 'prepared')}>prepared</Button>;
    const delivered = <Button onClick={() => updateTableStatus(id, order, 'delivered')}>delivered</Button>;
    const paid = <Button onClick={() => updateTableStatus(id, order, 'paid')}>paid</Button>;

    switch (status) {
      case 'free':
        return (
          <>
            {thinking}
            {ordered}
          </>
        );
      case 'thinking':
        return (
          <>
            {ordered}
            {free}
          </>
        );
      case 'ordered':
        return (
          <>
            {prepared}
          </>
        );
      case 'prepared':
        return (
          <>
            {delivered}
          </>
        );
      case 'delivered':
        return (
          <>
            {paid}
          </>
        );
      case 'paid':
        return (
          <>
            {free}
          </>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Container className={styles.component}>
          <p>Loading...</p>
        </Container>
      );
    } else if(error) {
      return (
        <Container className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Container>
      );
    } else {
      return (
        <Container className={styles.component}>
          <h2>Waiter view</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Table</th>
                <th>Status</th>
                <th>Order</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tables.map(row => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.status}</td>
                  <td>
                    {row.order && (
                      <Button as={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </td>
                  <td>{this.renderActions(row.id, row.order, row.status)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      );
    }
  }
}

export default Waiter;
