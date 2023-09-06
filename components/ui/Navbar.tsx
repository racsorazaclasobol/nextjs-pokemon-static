import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        width={70}
        height={70}
        alt="Icono"
      />
      <NextLink href="/" passHref legacyBehavior>
        <Link>
          <Text color="white" h2>
              P
            </Text>
            <Text color="white" h3>
              okemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favoritos" passHref legacyBehavior>
        <Link>
          <Text color="white" span>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
