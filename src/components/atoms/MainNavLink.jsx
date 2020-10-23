import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class MainNavLink extends Component {
  render() {
    const { title, url, color } = this.props;

    const borderCSS = `border-b-2 border-${color}-600 border-opacity-50 hover:border-opacity-100`;

    return (
      <li className={`flex-grow mx-1 text-center ${borderCSS}`}>
        <NavLink
          exact
          to={url}
          className={`hover:text-${color}-600`}
          activeClassName={`text-${color}-600`}
        >
          <div className="w-full p-4">{title}</div>
        </NavLink>
      </li>
    );
  }
}

MainNavLink.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
};
MainNavLink.defaultProps = {
  title: '',
  url: '',
  color: 'blue',
};
