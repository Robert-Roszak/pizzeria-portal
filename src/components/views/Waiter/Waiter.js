import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';

const Waiter = ({id}) => {
  id = '12';
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={process.env.PUBLIC_URL + '/waiter/order/new'} activeClassName= 'active'>New order</Link>
      <Link to={process.env.PUBLIC_URL + `/waiter/order/${id}`} activeClassName= 'active'>View order {id}</Link>
    </div>
  );
};

Waiter.propTypes = {
  id: PropTypes.string,
};

export default Waiter;
