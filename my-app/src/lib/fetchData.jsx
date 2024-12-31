import { revalidateTag } from "next/cache";

// fetchData
const fetchData = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };
  
  export { fetchData };
  
