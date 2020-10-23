import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PageHeader extends Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div className="container py-8 mx-auto w-full">
        <div className="grid grid-cols-1">
          <div className="text-center">
            <h1 className="text-3xl">{title}</h1>
            <h3 className="text-xl text-gray-700">{subtitle}</h3>
          </div>
        </div>
      </div>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
PageHeader.defaultProps = {
  title: '',
  subtitle: '',
};
