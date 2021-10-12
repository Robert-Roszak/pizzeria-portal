import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => (
  <div className={styles.component}>
    <div className={styles.login}>
      <TextField
        className={styles.input}
        required
        id="standard-required"
        label="Login" />
      <TextField
        className={styles.input}
        required
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <div className={styles.button}>
        <Button>Login</Button>
      </div>
    </div>
  </div>
);

export default Login;
