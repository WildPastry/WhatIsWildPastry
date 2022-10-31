import styles from './HoverSpotlight.module.scss';
import { useState } from 'react';

const HoverSpotlight: React.FC<HoverSpotlight> = (
  props: HoverSpotlight
): JSX.Element => {
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
        HOVER SPOTLIGHT
      </h3>
      {hover ? (
        <div
          style={{ left: coords.x, top: coords.y }}
          className={styles.hover__spotlight}
        />
      ) : null}
    </section>
  );
};

// EXPORT HoverSpotlight
HoverSpotlight.displayName = 'WILDPASTRY | HoverSpotlight';
export default HoverSpotlight;
