import Header from './Header';
import { render } from '@testing-library/react';

describe('<Header />', () => {
  it('renders the component', () => {
    render(<Header />);
  });
});
