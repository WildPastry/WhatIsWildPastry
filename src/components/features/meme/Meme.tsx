import styles from './Meme.module.scss';
import { useCallback } from 'react';

const Meme: React.FC<IMeme> = (props: IMeme): JSX.Element => {
  const memeText: IMemeText[] = [
    { id: 0, name: 'FIRST ITEM' },
    { id: 1, name: 'SECOND ITEM' },
    { id: 2, name: 'THIRD ITEM' },
    { id: 3, name: 'FOURTH ITEM' },
    { id: 4, name: 'FIFTH ITEM' },
    { id: 5, name: 'SIXTH ITEM' },
    { id: 6, name: 'SEVENTH ITEM' },
    { id: 7, name: 'EIGHTH ITEM' }
  ];

  const randomMeme = useCallback((): string => {
    const random = Math.floor(Math.random() * memeText.length);
    return memeText[random].name;
  }, [memeText]);

  return (
    <section
      aria-label='Meme Section'
      className={styles.meme}
      onClick={props.click}>
      <h1>{randomMeme()}</h1>
    </section>
  );
};

// EXPORT Meme
Meme.displayName = 'WILDPASTRY | Meme';
export default Meme;
