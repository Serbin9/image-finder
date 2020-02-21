const KEY = '15302072-a81be31270c5e4995077a81d4';
export default function searchSome (search, numberPage, callback){
  const baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${numberPage}&per_page=12&key=${KEY}`;
  fetch(baseURL).then (data=> data.json()).then(data => callback(data)).catch(error => console.log(error))
};