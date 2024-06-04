import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog() {
  return (
    <div>
      <Layout title="Blog!">
        <span></span>
      </Layout>
    </div>
  );
}

export const Head = () => <Seo title="Blog" />;
