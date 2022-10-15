/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import pastry from './../../../../public/images/pastry.jpg';
import styles from './Hover.module.scss';

const Hover: React.FC = (): JSX.Element => {
  const hoverRef = useRef(false);

  useEffect((): void => {
    console.log(hoverRef.current);
  }, []);

  const showHover = (): void => {
    hoverRef.current = true;
    console.log(hoverRef.current);
  };

  const hideHover = (): void => {
    hoverRef.current = false;
    console.log(hoverRef.current);
  };

  // Image logic
  const shouldShowImage = hoverRef.current
    ? styles.showImage
    : styles.hideImage;

  return (
    <section aria-label='Hover Section'>
      <h3 onMouseEnter={showHover} onMouseLeave={hideHover} className={shouldShowImage}>
        HOVER
      </h3>
      {/* <Image src={pastry} alt='Pastry' width={200} height={200} /> */}
    </section>
  );
};

// EXPORT Hover
Hover.displayName = 'WILDPASTRY | Hover';
export default Hover;
