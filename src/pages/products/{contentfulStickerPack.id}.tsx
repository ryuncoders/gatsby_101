import React from "react";
import Layout from "../../components/Layout";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <article>
        <GatsbyImage image={image!} alt={data.contentfulStickerPack?.name!} />
        <h2>{data.contentfulStickerPack?.name}</h2>
        <span>{data.contentfulStickerPack?.price}</span>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String!) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      preview {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
      price
    }
  }
`;
