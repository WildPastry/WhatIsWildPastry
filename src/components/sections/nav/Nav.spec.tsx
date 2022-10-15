import { render, screen } from '@testing-library/react';
import Nav from './Nav';

describe('<Nav />', () => {
  it('renders the component', () => {

    render(
      <Nav />
    );

    expect(screen.getByText('Nav')).toBeInTheDocument();
  });

});
