import React from 'react';
import ReactDOM from 'react-dom';
import OutputPanel from './OutputPanel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OutputPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});