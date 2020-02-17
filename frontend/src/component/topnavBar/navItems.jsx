import React from 'react';
import {Link} from 'react-router-dom';
import './navItem.scss';

const NavItem = ({ title, routeName }) => (
    <Link className="nav-item nav-link" to={`/${routeName}`} title={title}>
        <b>{title}</b>
    </Link>
);

export default NavItem;