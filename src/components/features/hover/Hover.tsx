/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import pastry from './../../../../public/images/pastry.jpg';
import styles from './Hover.module.scss';

const Hover: React.FC = (): JSX.Element => {
  const [ hover, setHover ] = useState(false);

  useEffect((): void => {
    console.log(hover);
  }, [hover]);

  const showHover = (): void => {
    setHover(true);
  };

  const hideHover = (): void => {
    setHover(false);
  };

  return (
    <section aria-label='Hover Section'>
      <h3 onMouseEnter={showHover} onMouseLeave={hideHover} className={styles.hover}>
        HOVER
      </h3>
      <Image src={pastry} alt='Pastry' width={200} height={200} />
    </section>
  );
};

// EXPORT Hover
Hover.displayName = 'WILDPASTRY | Hover';
export default Hover;
