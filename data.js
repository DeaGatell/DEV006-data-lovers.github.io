
//FUNCION ORDENAR AZ
export const funcionOrdenadoaZ = (datos) => {
  const sortedData = datos.sort((a, z) => (a.name > z.name ? 1 : -1));
  return sortedData;
};

//FUNCION ORDENAR ZA
export const funcionOrdenadozA = (datos) => {
  const sortedData = datos.sort((a, z) => (a.name < z.name ? 1 : -1));
  return sortedData;
};

//FUNCION FILTRAR POR GENERO
export const filterGender = (characters, selectGender) => {
  return characters.filter((results) => results.gender.includes(selectGender));
};

//FUNCION FILTRAR PARA CALCULO AGREGADO
export const filterOrigen = (characters, selectOrigen) => {
  return characters.filter((origin) => origin.name.includes(selectOrigen));
};



