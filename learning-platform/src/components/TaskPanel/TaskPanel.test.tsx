import ReactDOM from 'react-dom';
import TaskPanel from './TaskPanel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});