// const getData = () => {
//   fetch('https://www.breakingbadapi.com/api')
//     .then((response) => response.json())
// .then((data) => {
//   return getCharacters(data);
// //   getDeaths(data);
// //   getEpisodes(data);
// //   getQuotes(data);
// });
// };
const data = 'https://breakingbadapi.com/api/';

const getCharacters = () => {
  return fetch(data + 'characters').then((response) => response.json());
  // .then((response) => console.log('response', response)))
};

const getDeaths = (data) => {
  return fetch(data + 'deaths').then((response) => response.json());
};

const getEpisodes = (data) => {
  fetch(data + 'episodes').then((response) => response.json());
};

const getQuotes = (data) => {
  fetch(data + 'quotes').then((response) => response.json());
};

const getCharacterById = (id) => {
  return fetch(data + 'characters/' + id).then((response) => response.json());
};

export { getCharacters, getQuotes, getEpisodes, getDeaths, getCharacterById };
