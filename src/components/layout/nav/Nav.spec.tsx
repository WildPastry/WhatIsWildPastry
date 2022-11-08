import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import { render } from '@testing-library/react';

describe('<Nav />', () => {
  it('renders the component', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
  });
});
