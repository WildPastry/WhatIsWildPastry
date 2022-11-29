import styles from './Project.module.scss';

const Project: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Project Section' className={styles.project}>
      <h2 className='font--thin'>PROJECT</h2>
    </section>
  );
};

// EXPORT Project
Project.displayName = 'WILDPASTRY | Project';
export default Project;
