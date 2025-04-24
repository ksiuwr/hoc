import React from 'react';
import ReactDOM from 'react-dom';
import Playground from './Playground';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Playground />, div);
  ReactDOM.unmountComponentAtNode(div);
});