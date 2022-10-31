import HoverSpotlight from './HoverSpotlight';
import { render } from '@testing-library/react';

describe('<HoverSpotlight />', () => {
  it('renders the component', () => {
    render(<HoverSpotlight height={100} width={100} />);
  });
});
