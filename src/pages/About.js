import { useEffect, useState } from 'react';
import { urlFor, client } from '../client';


export const About = () => {
  const [about, setAbout] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbout(data);
      setFilter(data);
    });
  }, []);

  const filterName = (item) => {
    setActiveFilter(item);

    if (item === 'all') {
      setFilter(about);
    } else {
      setFilter(about.filter((data) => data.tags.includes(item)));
    }
  };

  return (
    <>
      <ul className='about-tags'>
        {['all', 'web', 'mobile', 'design'].map((item, index) => (
          <li className={activeFilter === item ? 'item-active' : ''} key={item + index} onClick={() => filterName(item)}>
            {item}
          </li>
        ))}
      </ul>
      <div className='card-wrapper'>
        {filter.map((item, index) => (
          <div className='card' key={item.title + index}>
            <img src={urlFor(item.imgUrl)} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
