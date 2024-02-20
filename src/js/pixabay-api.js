import axios from 'axios';

export async function fetchData(query, currentPage) {
  const API_KEY = '42433803-c7a0d02ae3ef09aff6a01d8a3';
  const url = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    lang: 'en',
    order: 'popular',
    q: query,
    per_page: 15,
    page: currentPage,
  };
  const res = await axios.get(url, { params });
  return res.data;
}