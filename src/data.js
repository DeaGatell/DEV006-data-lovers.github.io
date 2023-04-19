//ORDENAR A - Z
export const sortByAZ = (results) => {
  const sortedData = results.sort((a, z) => (a.name > z.name ? 1 : -1));
  return sortedData;
};
// eslint-disable-next-line no-console
console.log(sortByAZ);

//ORDENAR Z - A
export const sortByZA = (results) => {
  const sortedData = results.sort((a, z) => (a.name < z.name ? 1 : -1));
  return sortedData;
};
// eslint-disable-next-line no-console
console.log(sortByAZ);

export const anotherExample = () => {
  return 'OMG';
};
