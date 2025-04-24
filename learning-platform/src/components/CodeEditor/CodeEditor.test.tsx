import React from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './CodeEditor';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CodeEditor />, div);
  ReactDOM.unmountComponentAtNode(div);
});