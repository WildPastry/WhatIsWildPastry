import Index from './index';
import { Provider } from 'react-redux';
import { makeStore } from '../redux/store';
import { render } from '@testing-library/react';

describe('<Index />', () => {
  it('renders the component', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Index />
      </Provider>
    );
  });
});
