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
    <Layout title="anything">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail {
    mdx(frontmatter: { slug: { eq: "hello-world", glob: "" } }) {
      frontmatter {
        author
        slug
        title
        date
        cartegory
        headerImage {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IPostDetailProps) => {
  <Seo title={data.mdx?.frontmatter?.title!} />;
};
