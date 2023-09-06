import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: React.ReactNode;
  title?: string;
  pokemon?: string;
}

export const Layout = ({ children, pokemon, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Oscar Alcázar" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${pokemon}`}
        />
        <meta name="keywords" content={`${pokemon}, pokemon, pokedex`} />

        {/* Meta para compartir en redes sociales */}

        <meta property="og:title" content={`Información sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la página de información sobre ${ title }`} />
        <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />

      </Head>

      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
