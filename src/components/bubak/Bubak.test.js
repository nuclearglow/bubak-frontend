import React from 'react';
import ReactDOM from 'react-dom';
import Bubak from './Bubak';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bubak />, div);
  ReactDOM.unmountComponentAtNode(div);
});
