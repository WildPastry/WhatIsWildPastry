import { render, screen } from '@testing-library/react';
import About from './About';

describe('<Counter />', () => {
  it('renders the component', () => {

    render(
      <About />
    );

    expect(screen.getByText('About')).toBeInTheDocument();
  });

});
