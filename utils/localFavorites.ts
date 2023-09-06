const toggleFavorites = (id: number): void => {
  console.log("ToggleFavorite Llamado");

  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") ?? "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  
  if( typeof window === 'undefined' ) return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") ?? "[]"
  );

  return favorites.includes(id);
};

const getPokeFavorites = (): number[] => {

  return JSON.parse(localStorage.getItem('favorites') || '[]');

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorites,
  existInFavorites,
  getPokeFavorites,
};
