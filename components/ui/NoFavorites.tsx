import { Container, Image, Text } from "@nextui-org/react";
import React from "react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No hay favoritos </Text>
      <Image
        alt="imagen"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        height={250}
        width={250}
        css={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};
