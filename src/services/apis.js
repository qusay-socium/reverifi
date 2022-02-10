import { countriesUrl } from 'config/config';
import http from 'utils/http';

const getAllCountriesAndCities = async () => {
  const {
    data: { data },
  } = await http.get(countriesUrl);

  return data;
};

export default getAllCountriesAndCities;
