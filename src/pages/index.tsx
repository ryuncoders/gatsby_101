import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, PageProps, graphql } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <div>
      <Layout title="Welcome to DevStickers">
        {data.allContentfulStickerPack.nodes.map((sticker) => (
          <Link to={`/products/${sticker.id}`}>
            <article>
              <GatsbyImage
                image={getImage(sticker.preview?.gatsbyImageData!)!}
                alt={sticker.name!}
              />

              <h4>{sticker.name}</h4>
              <span>{sticker.price}</span>
            </article>
          </Link>
        ))}
      </Layout>
    </div>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        price
        name
        preview {
          gatsbyImageData(height: 180, placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
