import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="header">
          <Typography variant="h6">
            <Link to="/">View Agents</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/apply">Apply</Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
