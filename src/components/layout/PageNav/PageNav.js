import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import Nav from 'react-bootstrap/Nav';

const PageNav = () => {
  return (
    <Nav className={styles.nav} variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link as={NavLink} exact to={`${process.env.PUBLIC_URL}/`}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to={`${process.env.PUBLIC_URL}/login`}>Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`}>Kitchen</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to={`${process.env.PUBLIC_URL}/tables`}>Tables</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to={`${process.env.PUBLIC_URL}/waiter`}>Waiter</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default PageNav;
