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
        <div className='is-blend cursor cursor__default'>
          <div className='cursor__ico'>
            {/* <svg className='icon-cursor svg-icon'>
              <use xlink:href='#icon-cursor'></use>
            </svg> */}
          </div>
          <div className='cursor__point'></div>
        </div>
      ) : // <div
      //   style={{ left: coords.x, top: coords.y }}
      //   className={styles.pointed}></div>
      // <Image
      //   src={props.src}
      //   alt={props.alt}
      //   height={props.height}
      //   width={props.width}
      //   style={{
      //     left: coords.x,
      //     top: coords.y
      //   }}
      //   className={styles.hover__image}
      // />
      null}
    </section>
  );
};

// EXPORT Hover
Hover.displayName = 'WILDPASTRY | Hover';
export default Hover;
