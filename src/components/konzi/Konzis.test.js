import React from 'react';
import ReactDOM from 'react-dom';
import Konzi from './Konzi';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Konzi />, div);
  ReactDOM.unmountComponentAtNode(div);
});
