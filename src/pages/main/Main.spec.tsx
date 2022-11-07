import Main from './Main';
import { Provider } from 'react-redux';
import { makeStore } from '../redux/store';
import { render } from '@testing-library/react';

describe('<Main />', () => {
  it('renders the component', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  });
});
