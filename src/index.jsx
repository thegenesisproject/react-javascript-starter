/* istanbul ignore file */

import React from 'react';
import { render } from 'react-dom';
// Global Styles
import '../public/assets/styles/tailwind.build.css';
import '../public/assets/styles/app.scss';
// Application setup
import App from './App';

render(<App />, window.document.getElementById('app'));
