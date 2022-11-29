import HoverSpotlight from './HoverSpotlight';
import { render } from '@testing-library/react';

describe('<HoverSpotlight />', () => {
  it('renders the component', () => {
    render(
      <HoverSpotlight
        content={<span>HoverSpotlight</span>}
        width={100}
        height={100}
      />
    );
  });
});
