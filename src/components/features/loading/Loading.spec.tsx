import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('<Loading />', () => {
  it('renders the component', () => {

    render(
      <Loading />
    );

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

});
