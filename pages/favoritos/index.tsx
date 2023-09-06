import { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui/NoFavorites";
import { localFavorites } from "@/utils";
import { Card, Container, Grid } from "@nextui-org/react";
import { FavoritesPokemons } from "@/components/pokemons/FavoritesPokemons";

const FavoritosPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.getPokeFavorites());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritosPage;
