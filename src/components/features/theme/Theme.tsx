import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const Theme: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Theme Section'>
      <RiMoonFill className='icon--small' />
      <RiSunFill className='icon--small' />
    </section>
  );
};

// EXPORT Theme
Theme.displayName = 'WILDPASTRY | Theme';
export default Theme;
