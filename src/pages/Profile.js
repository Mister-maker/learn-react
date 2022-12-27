import { useContext } from 'react';
import { AppContext } from '../App';
import { ChangeProfileName } from '../components/ChangeProfileName';

export const Profile = () => {
  const { name } = useContext(AppContext);

  return (
    <div>
      <h1>Profile user name is {name}</h1>

      <ChangeProfileName />
    </div>
  );
};
