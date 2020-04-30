import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          CMS
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Footer;