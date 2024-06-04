import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { PageProps, graphql } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  return (
    <div>
      <Layout title="Blog!">
        <ul>
          {data.allFile.nodes.map((file) => (
            <li>{file.name}</li>
          ))}
        </ul>
        <span></span>
      </Layout>
    </div>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
