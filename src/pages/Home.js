import { useContext } from 'react';
import { AppContext } from '../App';
import { useQuery } from '@tanstack/react-query';

export const Home = () => {
  const { name } = useContext(AppContext);
  const { data, isLoading, refetch } = useQuery(["user"], () => {
      return fetch('https://catfact.ninja/fact').then((res) => res.json());
  });

  if (isLoading) return (
    <img
      src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'
      alt='gif'
    />
  );

  return (
    <div>
      <h1>Cat Fact: {data?.fact}</h1> 

      <p>{name}</p>

      <button className="button" onClick={refetch}>Update Data Using Refetch</button>
    </div>
  );
}