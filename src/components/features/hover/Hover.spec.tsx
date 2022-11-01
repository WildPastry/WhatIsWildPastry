import Hover from './Hover';
import { render } from '@testing-library/react';

describe('<Hover />', () => {
  it('renders the component', () => {
    render(
      <Hover
        alt='static-image'
        src='/img/pastry.jpg'
        height={200}
        width={200}
      />
    );
  });
});
