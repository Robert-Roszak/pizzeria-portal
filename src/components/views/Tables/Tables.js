import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const Tables = ({bookingId, eventId}) => {
  bookingId = 12;
  eventId = 13;
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={process.env.PUBLIC_URL + '/tables/booking/new'} activeClassName= 'active'>New booking</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/${bookingId}`} activeClassName= 'active'>View booking {bookingId}</Link>
      <Link to={process.env.PUBLIC_URL + '/tables/event/new'} activeClassName= 'active'>New event</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/event/${eventId}`} activeClassName= 'active'>View event {eventId}</Link>
    </div>
  );
};

Tables.propTypes = {
  bookingId: PropTypes.string,
  eventId: PropTypes.string,
};

export default Tables;
