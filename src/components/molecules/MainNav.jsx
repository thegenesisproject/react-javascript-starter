import React, { Component } from 'react';
import MainNavLink from '../atoms/MainNavLink';

export default class MainNav extends Component {
  render() {
    return (
      <nav>
        <ul className="flex flex-row flex-wrap">
          <MainNavLink title="Home" url="/" color="red" />
          <MainNavLink title="About" url="/about" color="indigo" />
          <MainNavLink title="Contact" url="/contact" color="green" />
        </ul>
      </nav>
    );
  }
}
