import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainNav from '../components/molecules/MainNav';

export default class DefaultLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <MainNav />
        {children}
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

DefaultLayout.defaultProps = {
  children: '',
};
