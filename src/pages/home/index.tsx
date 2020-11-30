import api from '../../api/api';

async function getPokemonAPIResponse(name: string) {
  const request = await api.get(`/pokemon/${name}`);
  return request.data.name;
}

export default getPokemonAPIResponse;
