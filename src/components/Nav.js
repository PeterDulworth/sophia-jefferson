import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Nav = ({ links, active }) => {
    return (
        <nav className="Nav">
            <div className="Nav__logo">
                SJ
            </div>
            <div className="Nav__content">
                {links.map((l, i) => <Link to={process.env.PUBLIC_URL + l.href} key={i} className={`Nav__link ${active === l.href ? 'Nav__link--active' : ''}`}>{l.label}</Link>)}
            </div>
        </nav>
    );
};

Nav.propTypes = {
    links: PropTypes.array.isRequired,
    active: PropTypes.string.isRequired,
};

export default Nav;
