import styles from './Footer.module.scss';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer
      aria-label='Footer Section'
      className={`${styles.footer} container-fluid`}>
      <h3>FOOTER</h3>
    </footer>
  );
};

// EXPORT Footer
Footer.displayName = 'WILDPASTRY | Footer';
export default Footer;
