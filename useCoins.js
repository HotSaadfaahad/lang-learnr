import { useEffect, useState } from 'react';
import { fetchTopCoins } from '@/api/coingecko';

const useCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchTopCoins();
      setCoins(data);
      setLoading(false);
    };
    load();
  }, []);

  return { coins, loading };
};

export default useCoins;
