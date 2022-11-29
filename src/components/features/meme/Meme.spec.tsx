import Meme from './Meme';
import { render } from '@testing-library/react';

describe('<Meme />', () => {
  it('renders the component', () => {
    render(<Meme />);
  });
});
