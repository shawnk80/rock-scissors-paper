
const BASE_URL = 'http://localhost:8000/rps/games/'

const fetchGames = async () => {
  let data = await fetch(`${BASE_URL}`);
  return data.json();
}

export default fetchGames;

