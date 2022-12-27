import { useContext } from 'react';
import { AppContext } from '../App';

export const ChangeProfileName = () => {
  const { name, setName } = useContext(AppContext);
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
