import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";

interface IPostDetailProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function PostDetail({ data, children }: IPostDetailProps) {
  return (
    <Layout title="anything">
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        date
        author
        slug
        title
      }
    }
  }
`;

export const Head = ({ data }: IPostDetailProps) => {
  <Seo title={data.mdx?.frontmatter?.title} />;
};
