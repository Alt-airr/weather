import {useState, useEffect} from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false)
      } catch (e) {
        console.log('error : ', e)
      }
    }
    fetchData();
  }, []);
  return {data, loading};
};

export default useFetch;