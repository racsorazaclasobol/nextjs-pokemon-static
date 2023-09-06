import { NextPage, GetStaticProps } from "next";

import { Card, Grid, Row, Text } from "@nextui-org/react";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemons/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="">
      <>
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map(({ id, name, img, url }) => (
            <PokemonCard id={id} name={name} img={img} key={name} url={url} />
          ))}
        </Grid.Container>
      </>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map(({ name, url }, index) => {
    return {
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
        index + 1
      }.png`,
      name,
      url,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
