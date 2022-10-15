import { render, screen } from '@testing-library/react';
import Hover from './Hover';

describe('<Hover />', () => {
  it('renders the component', () => {

    render(
      <Hover />
    );

    expect(screen.getByText('Hover')).toBeInTheDocument();
  });

});
