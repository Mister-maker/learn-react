import { useContext } from 'react';
import { AppContext } from '../App';
import { useQuery } from '@tanstack/react-query';

export const Home = () => {
  const { name } = useContext(AppContext);
  const { data, isLoading, error, refetch } = useQuery(["user"], () => {
      return fetch('https://catfact.ninja/fact').then((res) => res.json());
  });

  if (isLoading) return (
    <img
      src='https://media.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif'
      alt='gif'
    />
  );

  return (
    <div>
      <h1>Home user name is {data?.fact}</h1> 

      <p>{name}</p>

      <button onClick={refetch}>Update Data Using Refetch</button>
    </div>
  );
}