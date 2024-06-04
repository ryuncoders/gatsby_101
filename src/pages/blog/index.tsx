import React from "react";
import Layout from "../../components/Layout";
import { Link, PageProps, graphql } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data);
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`${file.frontmatter?.slug}`}>
              <h1> {file.frontmatter?.title}</h1>
            </Link>
            <div>
              <span>
                {file.frontmatter?.author} in:
              </span>
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
          slug
          title
        }
      }
    }
  }
`;
