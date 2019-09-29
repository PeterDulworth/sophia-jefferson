import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from "react-router-dom";

const Nav = ({ links, active }) => {
    const [redirect, setRedirect] = useState(null);

    const handleClick = () => {
        setRedirect(<Redirect to={`${process.env.PUBLIC_URL}/`} />);
    };

    return (
        <nav className="Nav">
            <div className="Nav__logo" onClick={handleClick}>
                SJ
            </div>
            <div className="Nav__content">
                {links.map((l, i) => <Link to={process.env.PUBLIC_URL + l.href} key={i} className={`Nav__link ${active === l.href ? 'Nav__link--active' : ''}`}>{l.label}</Link>)}
            </div>
            {redirect}
        </nav>
    );
};

Nav.propTypes = {
    links: PropTypes.array.isRequired,
    active: PropTypes.string.isRequired,
};

export default Nav;
