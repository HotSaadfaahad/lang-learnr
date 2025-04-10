import { useState } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const toggle = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return { favorites, toggle };
};

export default useFavorites;
