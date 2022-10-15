import styles from './Hover.module.scss';

const Hover: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Hover Section' className={styles.hover}>
      <h3>HOVER</h3>
    </section>
  );
};

// EXPORT Hover
Hover.displayName = 'WILDPASTRY | Hover';
export default Hover;
