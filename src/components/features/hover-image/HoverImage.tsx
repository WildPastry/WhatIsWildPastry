import styles from './HoverImage.module.scss';
import { useState } from 'react';

const HoverImage: React.FC<IHoverImage> = (props: IHoverImage): JSX.Element => {
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
    <section aria-label='Hover Section'>
      <span
        className={styles.hover}
        onMouseMove={handleMouseMove}
        onMouseEnter={showHover}
        onMouseLeave={hideHover}>
        {props.content}
      </span>
      {hover ? (
        <img
          className={styles.hover__image}
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          style={{
            left: coords.x,
            top: coords.y
          }}
        />
      ) : null}
    </section>
  );
};

// EXPORT HoverImage
HoverImage.displayName = 'WILDPASTRY | HoverImage';
export default HoverImage;
