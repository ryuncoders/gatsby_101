import React from "react";
import Layout from "../../components/Layout";
import { Link, graphql } from "gatsby";

interface IBlogProps {
  data: Queries.BlogPostsQuery;
}

export default function Blog({ data }: IBlogProps) {
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`${file.frontmatter?.slug}`}>
              <h1> {file.frontmatter?.title}</h1>
            </Link>
            <div>
              <span>{file.frontmatter?.author}</span>
              <span>{file.frontmatter?.date}</span>
            </div>
            <hr />
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          author
          cartegory
          date
          slug
          title
        }
      }
    }
  }
`;
