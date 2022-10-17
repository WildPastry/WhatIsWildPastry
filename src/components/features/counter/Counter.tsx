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
        <span className={styles.value}>{count}</span>
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
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button
          className={styles.button}
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
