import React from 'react';
import ReactDOM from 'react-dom';
import BonusTasks from './BonusTasks';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BonusTasks />, div);
  ReactDOM.unmountComponentAtNode(div);
});