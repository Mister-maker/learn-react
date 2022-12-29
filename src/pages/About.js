import { useEffect, useState } from 'react';
import { urlFor, client } from '../client';


export const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <div className='card-wrapper'>
      {about.map((item, index) => (
        <div className='card' key={item.name + index}>
          <img src={urlFor(item.imgUrl)} alt={item.title} />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
