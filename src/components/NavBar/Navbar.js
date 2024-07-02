import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { css, Global, ClassNames } from '@emotion/react'

import { Color1, Color2, Color3, Color4 } from '../../common/colors';

import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {

  return (
    <AppBar style={{
        backgroundColor: Color1,
        color: '#000',
        position: 'fixed',
        top: 0,
        height: '100px',
        zIndex: 100,
    }}>
      <Toolbar style={{justifyContent: 'space-between', marginBlock: 'auto'}}>
        <Typography variant="h5" style={{fontWeight: 'bold', color: Color3, marginLeft: 50}} noWrap>
          Bibek
        </Typography>
        <div>
          <Button color="inherit">
            <Link to="/" style={{color: Color3,textDecoration: 'none'}}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about" style={{color: Color3,textDecoration: 'none'}}>About</Link>
          </Button>
          <Button color="inherit">
            <Link to="/projects" style={{color: Color3,textDecoration: 'none'}}>Projects</Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" style={{color: Color3,textDecoration: 'none'}}>Contact</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
