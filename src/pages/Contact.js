import { useContext } from 'react';
import { AppContext } from '../App';

export const Contact = () => {
  const { name } = useContext(AppContext);

  return (
    <div>
      <h1>Contact user name is {name}</h1>
    </div>
  );
};
