import { Grid } from "@nextui-org/react";
import React from "react";
import { FavoriteCard } from "./FavoriteCard";

export const FavoritesPokemons = ({ pokemons }: { pokemons: number[] }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCard key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
