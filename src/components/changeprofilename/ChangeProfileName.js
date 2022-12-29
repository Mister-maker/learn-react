import { useContext } from 'react';
import { AppContext } from '../../App';
import './ChangeProfileName.css'

export const ChangeProfileName = () => {
  const { name, setName } = useContext(AppContext);
  return (
    <div>
      <input
        className='input'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
