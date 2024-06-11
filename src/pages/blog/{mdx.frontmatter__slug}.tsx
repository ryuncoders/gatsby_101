import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IPostDetailProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function PostDetail({ data, children }: IPostDetailProps) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title={data.mdx?.frontmatter?.title!}>
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail {
    mdx {
      frontmatter {
        author
        cartegory
        date
        slug
        title
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 250)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IPostDetailProps) => {
  <Seo title={data.mdx?.frontmatter?.title!} />;
};
