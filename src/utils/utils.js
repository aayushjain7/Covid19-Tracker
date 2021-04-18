export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => b.cases - a.cases);
};
