import { render, screen } from '@testing-library/react';
import About from './About';

describe('<About />', () => {
  it('renders the component', () => {

    render(
      <About />
    );

    expect(screen.getByText('About')).toBeInTheDocument();
  });

});
