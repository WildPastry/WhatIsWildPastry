import Home from './Home';
import { Provider } from 'react-redux';
import { makeStore } from '../../redux/store';
import { render } from '@testing-library/react';

describe('<Home />', () => {
  it('renders the component', () => {
    const store = makeStore();
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
});
