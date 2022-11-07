import About from './About';
import { render } from '@testing-library/react';

describe('<About />', () => {
  it('renders the component', () => {
    render(<About />);
  });
});
