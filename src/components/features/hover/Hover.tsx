import Image from 'next/future/image';
import styles from './Hover.module.scss';
import { useState } from 'react';

const Hover: React.FC<Hover> = (props: Hover): JSX.Element => {
  const [hover, setHover] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const showHover = (): void => {
    setHover(true);
  };

  const hideHover = (): void => {
    setHover(false);
  };

  /**
   * This function will attach coordinates which follow the cursor
   * @param {object} event An object containing coordinates as numbers
   * @param {number} event.clientX Horizontal movement
   * @param {number} event.clientY Vertical movement
   * @returns {void} No return type
   */
  const handleMouseMove = (event: {
    clientX: number;
    clientY: number;
  }): void => {
    setCoords({
      x: event.clientX - props.width / 2,
      y: event.clientY - props.height / 2
    });
  };

  return (
    <section aria-label='Hover Section' className={styles.hover}>
      <h3
        onMouseMove={handleMouseMove}
        onMouseEnter={showHover}
        onMouseLeave={hideHover}
        className={styles.hover__title}>
        HOVER IMAGE
      </h3>
      {hover ? (
        <Image
          alt={props.alt}
          src={props.src}
          width={props.width}
          height={props.height}
          style={{
            left: coords.x,
            top: coords.y
          }}
          className={styles.hover__image}
        />
      ) : null}
    </section>
  );
};

// EXPORT Hover
Hover.displayName = 'WILDPASTRY | Hover';
export default Hover;
