import App from './App';
import React from 'react';
import { render } from 'react-dom';

console.log('popup script');

const root = document.querySelector('#root');

render(<App />, root);
