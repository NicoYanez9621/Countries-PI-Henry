export const order = (array, orderBy) => {
  if (orderBy === "asc") {
    array = array.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (orderBy === "dsc") {
    array = array.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  } else if (orderBy === "hp") {
    array = array.sort((b, a) => a.population - b.population);
  } else if (orderBy === "sp") {
    array = array.sort((b, a) => b.population - a.population);
  }

  return array;
};
