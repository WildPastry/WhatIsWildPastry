import Image from 'next/future/image';
import styles from './Hover.module.scss';
import { useState } from 'react';

const Hover: React.FC<HoverImage> = (props: HoverImage): JSX.Element => {
  const [hover, setHover] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const showHover = (): void => {
    setHover(true);
  };

  const hideHover = (): void => {
    setHover(false);
  };

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
        HOVER
      </h3>
      {hover ? (
        // <div
        //   className={`${styles['is-blend']} ${styles.cursor} ${styles.cursor__default}`}
        //   style={{ left: coords.x, top: coords.y }}>
        //   <div className={styles.cursor__ico}>
            <svg
            style={{ left: coords.x, top: coords.y }}
              className={styles.pointed}
              viewBox='0 0 28.143 28.143'>
              <circle cx='14.071' cy='14.071' r='14.071' />
            </svg>

      ) : // <div
      //   Style={{ left: coords.x, top: coords.y }}
      //   ClassName={styles.pointed}></div>
      // <Image
      //   Src={props.src}
      //   Alt={props.alt}
      //   Height={props.height}
      //   Width={props.width}
      //   Style={{
      //     Left: coords.x,
      //     Top: coords.y
      //   }}
      //   ClassName={styles.hover__image}
      // />
      null}
    </section>
  );
};

// EXPORT Hover
Hover.displayName = 'WILDPASTRY | Hover';
export default Hover;
