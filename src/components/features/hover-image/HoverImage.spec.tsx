import HoverImage from './HoverImage';
import { render } from '@testing-library/react';

describe('<Hover />', () => {
  it('renders the component', () => {
    render(
      <HoverImage
        content={<span>HoverImage</span>}
        src='/img/pastry.jpg'
        alt='static-image'
        width={200}
        height={200}
      />
    );
  });
});
