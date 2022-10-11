import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

describe('<Counter />', () => {
  it('renders the component', () => {

    render(
      <Gallery />
    );

    expect(screen.getByText('Gallery')).toBeInTheDocument();
  });

});
