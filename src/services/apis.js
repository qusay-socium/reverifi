import http from 'utils/http';

const getAllCountriesAndCities = async () => {
  const url = 'https://countriesnow.space/api/v0.1/countries';
  const {
    data: { data },
  } = await http.get(url);

  return data;
};

export default getAllCountriesAndCities;
