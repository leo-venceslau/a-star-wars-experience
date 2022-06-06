import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {

  return (
    <>
    <header>

        <h1 className={'header-title'}>A Star Wars Experince</h1>
        <div className={'header_links-container'}>
            <Link className={'header_page-link'} to={'/films'}>Films</Link>
        </div>
    </header>
    </>
  )
}

export default Header