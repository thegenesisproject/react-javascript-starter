import React, { Component } from 'react';
import PageHeader from '../components/molecules/PageHeader';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader title="Home Page" subtitle="Start here..." />
      </div>
    );
  }
}
