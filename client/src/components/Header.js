//client id//295968964508-nvgdrf39kkg7gg95io7lk2d9tijt33dt.apps.googleusercontent.com
//client secret//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

import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return(
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streamy
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
