import { render, screen } from '@testing-library/react';
import Project from './Project';

describe('<Counter />', () => {
  it('renders the component', () => {

    render(
      <Project />
    );

    expect(screen.getByText('Project')).toBeInTheDocument();
  });

});
