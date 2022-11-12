import styles from './HoverSpotlight.module.scss';
import { useState } from 'react';

const HoverSpotlight: React.FC<IHoverSpotlight> = (
  props: IHoverSpotlight
): JSX.Element => {
  const [hover, setHover] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const showHover = (): void => {
    setHover(true);
  };

  const hideHover = (): void => {
    setHover(false);
  };

  /**
   * This function will attach coordinates to any element passed into this component.
   * The element will follow the cursor while hovering over this component and
   * will detach once the cursor moves away from this component.
   * @param {object} event An object containing coordinates as numbers
   * @param {number} event.clientX Horizontal movement
   * @param {number} event.clientY Vertical movement
   * @returns {void} No return
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
    <section aria-label='Hover Spotlight Section'>
      <span
        className={styles.hover}
        onMouseEnter={showHover}
        onMouseLeave={hideHover}
        onMouseMove={handleMouseMove}>
        {props.content}
      </span>
      {hover ? (
        <span
          className={styles.hover__spotlight}
          style={{
            left: coords.x,
            top: coords.y,
            width: props.width,
            height: props.height
          }}
        />
      ) : null}
    </section>
  );
};

// EXPORT HoverSpotlight
HoverSpotlight.displayName = 'WILDPASTRY | HoverSpotlight';
export default HoverSpotlight;
