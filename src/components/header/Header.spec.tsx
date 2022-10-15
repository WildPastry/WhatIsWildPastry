import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('renders the component', () => {

    render(
      <Header />
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
  });

});
