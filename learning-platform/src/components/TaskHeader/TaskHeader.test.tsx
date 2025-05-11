import React from 'react';
import ReactDOM from 'react-dom';
import TaskHeader from './TaskHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});