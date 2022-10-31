import HoverImage from './HoverImage';
import { render } from '@testing-library/react';

describe('<Hover />', () => {
  it('renders the component', () => {
    render(
      <HoverImage
        alt='static-image'
        src='/img/pastry.jpg'
        height={200}
        width={200}
      />
    );
  });
});
