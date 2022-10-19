import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount
} from '../../../redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import styles from './Counter.module.scss';
import { useState } from 'react';

const Counter: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const count: number = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('0');
  const incrementValue: number = Number(incrementAmount) || 0;

  return (
    <section aria-label='Counter Section'>
      <div className={styles.row}>
        <button
          role='button'
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}>
          -
        </button>
        <div className={styles.value}>{count}</div>
        <button
          role='button'
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)} />
        <button
          role='button'
          className={styles.button}
          aria-label='Add amount'
          onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button
          role='button'
          className={styles.button}
          aria-label='Add async'
          onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button
          role='button'
          className={styles.button}
          aria-label='Add if odd'
          onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </section>
  );
};

// EXPORT Counter
Counter.displayName = 'WILDPASTRY | Counter';
export default Counter;
